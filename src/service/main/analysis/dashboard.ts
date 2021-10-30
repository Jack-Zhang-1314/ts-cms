import service from '../../service'
import {
  IDataGoodsFavor,
  IDataGoodsCountAndSale,
  IDataType,
  IDataAdressGoodsSale
} from './type'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressCoodSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
  return service.get<IDataType<IDataGoodsCountAndSale[]>>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return service.get<IDataType<IDataGoodsCountAndSale[]>>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return service.get<IDataType<IDataGoodsFavor[]>>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodSale() {
  return service.get<IDataType<IDataAdressGoodsSale[]>>({
    url: DashboardAPI.addressCoodSale
  })
}
