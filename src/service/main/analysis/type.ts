export interface IDataType<T = any> {
  code: 0
  data: T
}

export interface IDataGoodsCountAndSale {
  goodsCount: number
  id: number
  name: string
}

export interface IDataGoodsFavor {
  id: number
  name: string
  goodsFavor: number
}

export interface IDataAdressGoodsSale {
  address: string
  count: number
}
