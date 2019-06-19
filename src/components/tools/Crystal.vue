<template>
  <div id="crystals">
    <el-row>
      <h3 class="title">
          GBF井井计算器
          <small>——只要攒井就会有翻身的一天</small>
      </h3>
      <el-col :span="6" :offset="5">
        <el-form v-bind:model="inputData" label-width="180px" size="small">
          <el-form-item label="宝晶石">
            <el-input v-model.number="inputData.crystalsCount"></el-input>
          </el-form-item>
          <el-form-item label="单抽券">
            <el-input v-model.number="inputData.onceTicket"></el-input>
          </el-form-item>
          <el-form-item label="十连券">
            <el-input v-model.number="inputData.tenPartTicket"></el-input>
          </el-form-item>
          <el-form-item label="苍光的御印">
            <el-input v-model.number="inputData.ceruleanStones"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-table :data="computedCrystalsData"
                  :show-header="false"
                  :cell-style	="tableCenter"
        >
          <el-table-column prop="name">
            <template slot-scope="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="value">
            <template slot-scope="scope">
              <div v-if="scope.row.index == 'percentSwitch'">
                <div v-if="scope.row.value < 100">
                  <el-progress :text-inside="true" :stroke-width="24" :percentage="scope.row.value"></el-progress>
                </div>
                <div v-else>
                  <el-progress :text-inside="true" :stroke-width="24" :percentage=100 status="success"></el-progress>
                </div>
              </div>
              <div v-else>
                {{ scope.row.value }}
              </div>
            </template>
          </el-table-column>

        </el-table>
      </el-col>
      
    </el-row>
        <div class="text-center">
          <el-button type="danger" v-on:click="reset()" style="margin: 20px auto;">归零</el-button>
        </div>
        <div class="text-center">Idea By 是个日本大佬，网站忘记了。</div>
  </div>
</template>

<script>
export default {
  name: "Creystal",
  data() {
    return {
      //定义表单输入数据
      inputData: {
        crystalsCount: 0,
        onceTicket: 0,
        tenPartTicket: 0,
        ceruleanStones: 0
      },
      defaultInput: {},
      usdToJpy: "API服务器物理超度中...",
      exchangeRate: "API服务器物理超度中...",
      updatedAt: "API服务器物理超度中..."
    };
  },
  //创建钩子
  created() {
    //深拷贝表单初始值
    this.defaultInput = JSON.parse(JSON.stringify(this.inputData));
  },
  //更新钩子
  updated() {
    //限制入参参数不能为空字符串或字母
    for (let value in this.inputData) {
      if (this.inputData[value] === "" || (typeof this.inputData[value] === 'string')) {
        this.inputData[value] = 0;
      }
    };
  },
  //方法
  methods: {
    
    //重置表单输入
    reset() {
      this.inputData = Object.assign(this.inputData, this.defaultInput);
    },
    tableCenter() {
      return "text-align:center";
    }
  },
  //计算属性
  computed: {
    //计算宝晶石数据
    computedCrystalsData() {
      //获取表单数据
      let inputData       = this.inputData;
      //初始化相关数据
      let crystalsSwitch  = 0;
      let ticketSwitch    = 0;
      let marginMobaPoint = 0;
      let percentSwitch   = 0;
      let unitPrice       = 0;
      let yen             = 10300;
      //宝晶石换算
      crystalsSwitch      = parseInt(inputData.crystalsCount) + 
                            parseInt(inputData.onceTicket * 300) + 
                            parseInt(inputData.tenPartTicket * 3000) + 
                            parseInt(inputData.ceruleanStones * 300);
      //抽卡次数换算
      ticketSwitch        = Math.floor(inputData.crystalsCount / 300) +
                            inputData.onceTicket +
                            inputData.tenPartTicket * 10 +
                            inputData.ceruleanStones;
      //一井百分比计算
      let crystalsSwitchValue = crystalsSwitch;
      if (crystalsSwitchValue !== 0) {
        crystalsSwitchValue /= 900;
      }
      percentSwitch = parseFloat(crystalsSwitchValue.toFixed(3));
      //课单差额计算
      if (crystalsSwitch >= 90000) {
        marginMobaPoint = "不需要课金了哦～";
      } else {
        marginMobaPoint = Math.ceil((90000 - crystalsSwitch) / 10000) + "单";
      }
      //汇率计算
      unitPrice = yen / this.exchangeRate;
      if (!isFinite(unitPrice) || isNaN(unitPrice)) {
        unitPrice =  this.exchangeRate;
      } else {
        unitPrice = '$' + unitPrice.toFixed(2);
      }
      //返回计算结果
      return [
        {
          index: "crystalsSwitch",
          name: "宝晶石换算",
          value: crystalsSwitch
        },
        {
          index: "ticketSwitch",
          name: "抽卡次数换算",
          value: ticketSwitch
        },
        {
          index: "percentSwitch",
          name: "一井百分比",
          value: percentSwitch
        },
        {
          index: "marginMobaPoint",
          name: "你还需要课",
          value: marginMobaPoint
        },
        {
          index: "updatedAt",
          name: "当前汇率：USD => JPY",
          value: this.usdToJpy
        },
        {
          index: "updatedAt",
          name: "一单(10300円)美元金额",
          value: this.updatedAt
        },
        {
          index: "unitPrice",
          name: "汇率更新时间(GMT+0)",
          value: unitPrice
        },
      ]
    },
  }
};
</script>
  
<style>
#crystals {
  color: #66ccff;
}
.title {
  margin: 3% 0 3% 0;
}
.el-form-item__label {
  color: #66ccff;
}
.el-form input{
  background: rgba(0, 0, 0, 0.32);
  color: #66ccff;
}
.el-table__expanded-cell {
  background: rgba(0, 0, 0, 0.32);
  color: #66ccff;
}
.el-table, .el-table tr {
  background: rgba(0, 0, 0, 0.32);
  color: #66ccff;
  border-radius: 20px;
}
.el-table td {
  border-bottom: none;
}
.el-progress-bar__outer {
  background: rgba(0, 0, 0, 0.32);
  color: #66ccff;
} 
.el-table::before {
  content: none;
}
</style>