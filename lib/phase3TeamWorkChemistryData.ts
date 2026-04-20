/** 우리 팀 워크 케미 테스트 — phase3-team-work-chemistry-test (문항·결과 텍스트는 JSON에서 7개 로케일 제공) */

import phase3TeamWorkChemistryQuestionsJson from './phase3TeamWorkChemistryQuestions.json';
import phase3TeamWorkChemistryResultsJson from './phase3TeamWorkChemistryResults.json';

export type TeamRoleKey = 'visionary' | 'executor' | 'coordinator' | 'analyst' | 'creator' | 'supporter';

export const ROLE_ORDER: TeamRoleKey[] = [
  'visionary',
  'executor',
  'coordinator',
  'analyst',
  'creator',
  'supporter',
];

export interface Phase3TeamWorkChemistryQuestion {
  id: number;
  question: Record<string, string>;
  options: Record<string, string>[];
}

export interface Phase3TeamWorkChemistryResult {
  type: string;
  roleKey: TeamRoleKey;
  emoji: string;
  title: Record<string, string>;
  tagline: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>;
  naturalRoles: Record<string, string>;
  strength: Record<string, string>;
  watchOut: Record<string, string>;
  bestMatch: Record<string, string>;
  conflictMatch: Record<string, string>;
  shareOneLiner: Record<string, string>;
}

export interface TeamMemberPayload {
  n: string;
  r: TeamRoleKey;
}

export interface TeamPayload {
  m: TeamMemberPayload[];
}

export function encodeTeamPayload(p: TeamPayload): string {
  const json = JSON.stringify(p);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

export function decodeTeamPayload(raw: string): TeamPayload | null {
  try {
    const s = raw.trim();
    const bin = atob(s);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const json = new TextDecoder().decode(bytes);
    const o = JSON.parse(json) as TeamPayload;
    if (!Array.isArray(o.m)) return null;
    const allowed: TeamRoleKey[] = [...ROLE_ORDER];
    for (const row of o.m) {
      if (typeof row.n !== 'string' || !allowed.includes(row.r)) return null;
      if (row.n.length > 40) return null;
    }
    if (o.m.length > 30) return null;
    return o;
  } catch {
    return null;
  }
}

export const TEAM_ROLE_EMOJI: Record<TeamRoleKey, string> = {
  visionary: '🔭',
  executor: '⚙️',
  coordinator: '🤝',
  analyst: '📊',
  creator: '💡',
  supporter: '☀️',
};

export function calculatePhase3TeamWorkChemistryResult(totalScore: number): string {
  if (totalScore <= 5) return 'Type1';
  if (totalScore <= 11) return 'Type2';
  if (totalScore <= 19) return 'Type3';
  if (totalScore <= 27) return 'Type4';
  if (totalScore <= 33) return 'Type5';
  return 'Type6';
}

export function getRoleKeyFromResultType(type: string): TeamRoleKey {
  const map: Record<string, TeamRoleKey> = {
    Type1: 'visionary',
    Type2: 'executor',
    Type3: 'coordinator',
    Type4: 'analyst',
    Type5: 'creator',
    Type6: 'supporter',
  };
  return map[type] || 'coordinator';
}

export type ChemistryGrade = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D';

/** 시너지 블록 — UI에서 messages `report.synergy.<key>` 로 번역 */
export type TeamSynergyKey = 'visionary_executor' | 'coordinator_analyst' | 'creator_executor';

/** 종합 코멘트 — UI에서 messages `report.grade.<key>` 로 번역 */
export type TeamGradeBlockKey =
  | 'six_roles'
  | 'five_roles'
  | 'four_roles'
  | 'three_balance'
  | 'two_roles'
  | 'one_cluster';

export interface TeamChemistryReport {
  memberCount: number;
  distinctRoles: number;
  allSameRole: boolean;
  grade: ChemistryGrade;
  counts: Record<TeamRoleKey, number>;
  bars: { role: TeamRoleKey; filled: number }[];
  synergyKeys: TeamSynergyKey[];
  /** 부족 역할 (표시 순서 고정) */
  missingKeys: TeamRoleKey[];
  gradeBlockKey: TeamGradeBlockKey;
}

function hasRole(members: TeamMemberPayload[], r: TeamRoleKey): boolean {
  return members.some((x) => x.r === r);
}

export function buildTeamChemistryReport(members: TeamMemberPayload[]): TeamChemistryReport | null {
  if (!members.length) return null;
  const counts = {} as Record<TeamRoleKey, number>;
  ROLE_ORDER.forEach((r) => {
    counts[r] = 0;
  });
  members.forEach((m) => {
    counts[m.r] += 1;
  });
  const distinctRoles = ROLE_ORDER.filter((r) => counts[r] > 0).length;
  const memberCount = members.length;
  const allSameRole = distinctRoles === 1;

  let grade: ChemistryGrade;
  if (allSameRole) grade = 'D';
  else if (distinctRoles === 6) grade = 'A+';
  else if (distinctRoles === 5) grade = 'A';
  else if (distinctRoles === 4) grade = 'B+';
  else if (distinctRoles === 3) grade = 'B';
  else grade = 'C';

  const bars = ROLE_ORDER.map((role) => ({
    role,
    filled: memberCount ? Math.min(6, Math.round((counts[role] / memberCount) * 6)) : 0,
  }));

  const synergyKeys: TeamSynergyKey[] = [];
  if (hasRole(members, 'visionary') && hasRole(members, 'executor')) {
    synergyKeys.push('visionary_executor');
  }
  if (hasRole(members, 'coordinator') && hasRole(members, 'analyst')) {
    synergyKeys.push('coordinator_analyst');
  }
  if (hasRole(members, 'creator') && hasRole(members, 'executor')) {
    synergyKeys.push('creator_executor');
  }

  const missingKeys: TeamRoleKey[] = [];
  (['visionary', 'executor', 'analyst', 'coordinator', 'creator', 'supporter'] as TeamRoleKey[]).forEach((r) => {
    if (!hasRole(members, r)) missingKeys.push(r);
  });

  let gradeBlockKey: TeamGradeBlockKey;
  if (distinctRoles === 1) gradeBlockKey = 'one_cluster';
  else if (distinctRoles === 6) gradeBlockKey = 'six_roles';
  else if (distinctRoles === 5) gradeBlockKey = 'five_roles';
  else if (distinctRoles === 4) gradeBlockKey = 'four_roles';
  else if (distinctRoles === 3) gradeBlockKey = 'three_balance';
  else gradeBlockKey = 'two_roles';

  return {
    memberCount,
    distinctRoles,
    allSameRole,
    grade,
    counts,
    bars,
    synergyKeys,
    missingKeys,
    gradeBlockKey,
  };
}

export const phase3TeamWorkChemistryQuestions: Phase3TeamWorkChemistryQuestion[] =
  phase3TeamWorkChemistryQuestionsJson as Phase3TeamWorkChemistryQuestion[];

export const phase3TeamWorkChemistryResults: Phase3TeamWorkChemistryResult[] =
  phase3TeamWorkChemistryResultsJson as Phase3TeamWorkChemistryResult[];
