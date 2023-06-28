interface MinerBasic {
  rewards: string
}

interface MinerExtra {
  initPledge: string
  qualityAdjustPower: string
}

export interface MinerStat {
  basic: MinerBasic
  extra: MinerExtra
}

export interface MinerLucky {
  lucky: string
}
