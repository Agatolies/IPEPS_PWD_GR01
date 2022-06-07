export enum RankType {
  CP = 'CP',
  // Congés Payés
  SM = 'SM',
  // Salaire Mensuel
  TM = 'TM',
  // Treizième mois
  COM = 'COM',
  // Commission
  NONE = 'NONE'
}

export const RankTypes: RankType[] = [RankType.CP, RankType.SM, RankType.TM, RankType.COM, RankType.NONE];
