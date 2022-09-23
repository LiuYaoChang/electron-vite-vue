<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import { onMounted, ref } from 'vue';
    import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>


<template>
<div class="common-layout">
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>常用菜单</span>
                    </template>
                    <el-menu-item index="1-1">石出入库管理</el-menu-item>
                    <el-menu-item index="1-2">部门存储统计</el-menu-item>
                    <el-menu-item index="1-3">订单数据查询</el-menu-item>
                    <el-menu-item index="1-4">部门过货查询</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>石管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>金管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>订单管理</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</div>
</template>


<style>
    .common-layout .el-aside {
        background-color: var(--el-color-primary-light-8);
        color: var(--el-text-color-primary);
        /* text-align: center; */
    }
    .common-layout .el-header, .common-layout .el-footer {
        background-color: var(--el-color-primary-light-7);
        color: var(--el-text-color-primary);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .common-layout .el-main {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-text-color-primary);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 150px; */
    }
</style>