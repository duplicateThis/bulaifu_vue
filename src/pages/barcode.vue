<template>
    <div id="barcode">
        <el-row>
             <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="0"><br></el-col>
            <el-col :xl="18" :lg="18" :md="18" :sm="18" :xs="24">
                <div class="barcode-box">
                    <el-input
                        type="textarea"
                        :rows="5"

                        placeholder="请输入内容"
                        autosize>
                    </el-input>
                </div>
                <canvas class="barcode-canvas" ref="barcode"></canvas>
            </el-col>
             <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="0"><br></el-col>
        </el-row>

    </div>
</template>

<script type="text/javascript">
import jsBarcode from 'jsbarcode';
export default {
    name: 'barcode',
    data () {
        return {

        }
    },
    methods: {

    },
    mounted () {
        const canvas = this.$refs.barcode;
        JsBarcode(canvas, "Hello");
    }
}
</script>

<style scoped>
.barcode-box {
    width: 50%;
    float: left;
    border: 1px solid #000;
}
.barcode-canvas {
    float: left;
}

</style>
