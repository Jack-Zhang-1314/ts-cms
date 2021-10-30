<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <Card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </Card>
      </el-col>
      <el-col :span="10">
        <Card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </Card>
      </el-col>
      <el-col :span="7">
        <Card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </Card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <Card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="不同商品的收藏">
          <bar-echart v-bind="categoryGoodsFaver"></bar-echart>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import Card from '@/base-ui/card/index'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'
import { IAddressSale, ICounts } from '@/store/main/analysis/type'
export default defineComponent({
  name: 'dashboard',
  components: {
    Card,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    //请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    //获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: ICounts) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSole
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    const categoryGoodsFaver = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map(
        (item: IAddressSale) => {
          return { name: item.address, value: item.count }
        }
      )
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFaver,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
