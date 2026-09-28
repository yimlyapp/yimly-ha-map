import React, { useState } from 'react';
import {
  X,
  Plus,
  Users,
  Copy,
  Check,
  QrCode,
  Trash2,
  UserPlus,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { FamilyCircle, CircleMember, PersonEntity } from '../../types/ha.ts';
import { PASTEL_RAINBOW_COLORS, DEFAULT_MEMBER_COLOR } from '../../utils/colors.ts';

interface CircleModalProps {
  isOpen: boolean;
  onClose: () => void;
  circle: FamilyCircle | null;
  haPersons: PersonEntity[];
  onCreateCircle: (name: string, memberPersonId: string, color: string) => void;
  onJoinCircle: (code: string) => void;
  onLeaveCircle: () => void;
  onAddMember: (personId: string, displayName: string, color: string) => void;
  onRemoveMember: (memberId: string) => void;
  onUpdateMemberColor: (memberId: string, color: string) => void;
  currentPersonId?: string;
}

export const CircleModal: React.FC<CircleModalProps> = ({
  isOpen,
  onClose,
  circle,
  haPersons,
  onCreateCircle,
  onJoinCircle,
  onLeaveCircle,
  onAddMember,
  onRemoveMember,
  onUpdateMemberColor,
  currentPersonId,
}) => {
  const [tab, setTab] = useState<'members' | 'create' | 'join'>('members');
  const [newCircleName, setNewCircleName] = useState('My Family');
  const [selectedPersonId, setSelectedPersonId] = useState(
    currentPersonId || (haPersons.length > 0 ? (haPersons.find(p => p.entity_id === currentPersonId)?.entity_id || '') : '')
  );
  const [selectedColor, setSelectedColor] = useState(DEFAULT_MEMBER_COLOR);
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [customHex, setCustomHex] = useState('#FF8E85');
  const [copiedCode, setCopiedCode] = useState(false);
  const [showQr, setShowQr] = useState(false);

  // For adding a new member to existing circle
  const [addPersonModalOpen, setAddPersonModalOpen] = useState(false);
  const [addPersonId, setAddPersonId] = useState('');
  const [addPersonName, setAddPersonName] = useState('');
  const [addPersonColor, setAddPersonColor] = useState(PASTEL_RAINBOW_COLORS[1].hex);

  if (!isOpen) return null;

  // Unlinked HA persons available to add
  const unlinkedPersons = haPersons.filter(
    (p) => !circle?.members.some((m) => m.ha_person_id === p.entity_id)
  );

  const handleCopyCode = () => {
    if (circle?.code) {
      navigator.clipboard.writeText(circle.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCircleName.trim()) return;
    const person = haPersons.find((p) => p.entity_id === selectedPersonId);
    onCreateCircle(
      newCircleName.trim(),
      person ? person.entity_id : (selectedPersonId || 'person.user'),
      selectedColor
    );
    setTab('members');
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinCodeInput.trim()) return;
    onJoinCircle(joinCodeInput.trim().toUpperCase());
    setTab('members');
  };

  const handleConfirmAddMember = () => {
    if (!addPersonId) return;
    const person = haPersons.find((p) => p.entity_id === addPersonId);
    const name = addPersonName.trim() || person?.attributes.friendly_name || addPersonId;
    onAddMember(addPersonId, name, addPersonColor);
    setAddPersonModalOpen(false);
    setAddPersonId('');
    setAddPersonName('');
  };

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-2xl backdrop-blur-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {circle ? circle.name : 'Family Circle'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {circle ? `Code: ${circle.code}` : 'Connect your family via Home Assistant'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!circle ? (
            /* No Circle: Create or Join Choice */
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-3">
                  <Users className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                  Welcome to Yimly Family Circle
                </h4>
                <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                  Create a new circle for your family or join an existing circle with a 6-digit code.
                </p>
              </div>

              {/* Segmented Control */}
              <div className="flex rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setTab('create')}
                  className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                    tab !== 'join'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Create Circle
                </button>
                <button
                  type="button"
                  onClick={() => setTab('join')}
                  className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                    tab === 'join'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Join with Code
                </button>
              </div>

              {tab === 'join' ? (
                /* Join Form */
                <form onSubmit={handleJoin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Circle Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. YIM-834"
                      value={joinCodeInput}
                      onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center font-mono text-base font-bold tracking-widest text-slate-900 uppercase focus:border-slate-900 focus:outline-none"
                      maxLength={7}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!joinCodeInput.trim()}
                    className="w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 disabled:opacity-50"
                  >
                    Join Circle
                  </button>
                </form>
              ) : (
                /* Create Form */
                <form onSubmit={handleCreate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Circle Name
                    </label>
                    <input
                      type="text"
                      value={newCircleName}
                      onChange={(e) => setNewCircleName(e.target.value)}
                      placeholder="e.g. Our Family"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Home Assistant Person
                    </label>
                    <select
                      value={selectedPersonId}
                      onChange={(e) => setSelectedPersonId(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
                    >
                      {haPersons.map((p) => (
                        <option key={p.entity_id} value={p.entity_id}>
                          {p.attributes.friendly_name || p.entity_id} ({p.entity_id})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Member Colour
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PASTEL_RAINBOW_COLORS.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => setSelectedColor(c.hex)}
                          style={{ backgroundColor: c.hex }}
                          className={`h-7 w-7 rounded-full transition-transform active:scale-90 ${
                            selectedColor === c.hex
                              ? 'ring-2 ring-slate-900 ring-offset-2 scale-110'
                              : 'hover:scale-105'
                          }`}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800"
                  >
                    Create Circle
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* Circle Exists: Member List & Invite Options */
            <div className="space-y-5">
              {/* Circle Info Bar */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Invite Code
                  </span>
                  <span className="font-mono text-base font-bold text-slate-900 tracking-wider">
                    {circle.code}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95"
                  >
                    {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={() => setShowQr(!showQr)}
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95"
                    title="Show QR Code"
                  >
                    <QrCode className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* QR Code Display on toggle */}
              {showQr && (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-center">
                  <div className="rounded-xl bg-white p-3 shadow-md">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
                        circle.code
                      )}`}
                      alt="QR Join Code"
                      className="h-32 w-32"
                    />
                  </div>
                  <span className="mt-2 text-xs font-medium text-indigo-900">
                    Scan with camera or companion app to join
                  </span>
                </div>
              )}

              {/* Member List */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Members ({circle.members.length})
                  </h4>
                  {unlinkedPersons.length > 0 && (
                    <button
                      onClick={() => setAddPersonModalOpen(true)}
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add HA Person</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {circle.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        {/* Member Color Swatch */}
                        <div className="relative group">
                          <div
                            style={{ backgroundColor: member.color }}
                            className="h-7 w-7 rounded-full ring-2 ring-white shadow-xs cursor-pointer flex items-center justify-center text-white text-xs font-bold"
                          >
                            {member.display_name.charAt(0).toUpperCase()}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-slate-800">
                              {member.display_name}
                            </span>
                            {member.is_self && (
                              <span className="rounded-full bg-slate-100 px-1.5 py-0.2 text-[9px] font-medium text-slate-500">
                                You
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            {member.ha_person_id}
                          </span>
                        </div>
                      </div>

                      {/* Color change picker & Remove */}
                      <div className="flex items-center gap-1.5">
                        <select
                          value={member.color}
                          onChange={(e) => onUpdateMemberColor(member.id, e.target.value)}
                          className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700"
                        >
                          {PASTEL_RAINBOW_COLORS.map((c) => (
                            <option key={c.hex} value={c.hex}>
                              {c.name}
                            </option>
                          ))}
                        </select>

                        {circle.members.length > 1 && (
                          <button
                            onClick={() => onRemoveMember(member.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            title="Remove Member"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add HA Person Section if modal triggered */}
              {addPersonModalOpen && (
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-3 animate-in fade-in duration-150">
                  <h5 className="text-xs font-bold text-indigo-950">Add Home Assistant Person</h5>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Select HA Person Entity
                    </label>
                    <select
                      value={addPersonId}
                      onChange={(e) => {
                        const pid = e.target.value;
                        setAddPersonId(pid);
                        const match = haPersons.find((p) => p.entity_id === pid);
                        if (match) setAddPersonName(match.attributes.friendly_name || pid);
                      }}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900"
                    >
                      <option value="">-- Choose person --</option>
                      {unlinkedPersons.map((p) => (
                        <option key={p.entity_id} value={p.entity_id}>
                          {p.attributes.friendly_name || p.entity_id}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Member Colour
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {PASTEL_RAINBOW_COLORS.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => setAddPersonColor(c.hex)}
                          style={{ backgroundColor: c.hex }}
                          className={`h-6 w-6 rounded-full transition-transform ${
                            addPersonColor === c.hex ? 'ring-2 ring-slate-900 scale-110' : ''
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setAddPersonModalOpen(false)}
                      className="rounded-xl px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200/50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmAddMember}
                      disabled={!addPersonId}
                      className="rounded-xl bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-xs disabled:opacity-50"
                    >
                      Add to Circle
                    </button>
                  </div>
                </div>
              )}

              {/* Leave Circle Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onLeaveCircle}
                  className="text-xs font-medium text-rose-600 hover:text-rose-700"
                >
                  Leave / Reset Circle
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
