export interface IDashboardState {
  categoryGoodsCount: ICounts[]
  categoryGoodsSole: ICounts[]
  categoryGoodsFavor: IFavor[]
  addressGoodsSale: IAddressSale[]
}

interface IGoods {
  id: number
  name: string
}

export interface ICounts extends IGoods {
  goodsCount: number
}

export interface IFavor extends IGoods {
  goodsFavor: number
}

export interface IAddressSale {
  address: string
  count: number
}
