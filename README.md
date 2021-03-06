# CRMS-有点火会员管理系统

## 更新版本
 - 1.1.3
    - 新增全部试用展示列
    - 推送记录列表

 - 1.1.2
    - 试用产品维护
    - 用户添加来源类型

 - 1.1.0
    - 搜索用户
    - 设置自动发券
    - 为用户添加积分、发送优惠券

 - 1.0.0
    - 审核用户餐饮认证
    - 审核用户试用申请
    - 审核用户反馈申请

## 项目说明

此项目为有点火微信公众号开发的后台管理项目

## 功能模块

 - [审核用户认证](#审核用户认证)
 - [审核用户试用](#审核用户试用)
 - [审核用户反馈](#审核用户反馈)
 - [商城设置](#商城设置)
 - [试用产品维护](#试用产品维护)
 - [推送记录列表](#推送记录列表)

## 项目结构

```
config
mock
public/
  favicon.ico
  index.html
scripts
src/
  components
  containers
  images/
    svg
  middleware
  root
  sources
  store
  style
  index.js
  routes.js
package.json
README.md
```

## 审核用户认证

### 功能说明: 

 - 当用户在微信中,注册并提交餐饮认证后,认证信息会在后台`餐饮审核`中显示,以便运维人员审核,在`全部会员`中可以通过不同的状态来筛选显示用户,并且提供下载用户资料的excel表格的功能.

### 完成情况:

- ~~审核用户认证~~


## 审核用户试用

### 功能说明: 

  - 当用户在微信公众号中申请产品试用后,在后台`试用审核`列表显示用户试用的信息,在`全部试用`中可根据会员状态筛选显示用户,并提供下载表格功能.

### 完成情况:

- ~~审核用户试用~~

## 审核用户反馈

### 功能说明: 

  - 当用户通过试用申请审核后,可在公众号内提交反馈信息,提交成功后用户信息会在后台`反馈审核`中显示,在`全部反馈`中也会显示所有状态下的反馈,并提供下载功能.

### 完成情况:

- ~~审核用户反馈~~

## 商城设置

### 功能说明: 

  - 为方便给注册及反馈成功的用户自动发券,并设置优惠券的有效期,可以在`商城设置`中更新发送的优惠券.

### 完成情况:

- ~~商城设置~~

## 试用产品维护

### 功能说明: 

  - 用于维护目前在试用活动中可选的产品,通过`新建商品`添加上传商品的图片,code和产品名称,并可以通过`是否试用`修改商品是否生效,目前没有删除商品的功能.

### 完成情况:

- ~~试用产品维护~~

## 推送记录列表

### 功能说明: 

  - 所有通过试用申请的用户，会在后台自动在旺店通推送一个订单，此记录表主要用户查询/展示推送的订单流水

### 完成情况:

- actions
- component
- reducer

## 作者
 - kuangshu