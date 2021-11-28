import { Collapse, Tabs } from 'antd-mobile';

const HelpPage = () => {
  return (
    <Tabs>
      <Tabs.Tab title='试玩领奖教程' key='steps'>
        试玩长图
      </Tabs.Tab>
      <Tabs.Tab title='常见问题汇总' key='FAQ'>
        <Collapse accordion>
          <Collapse.Panel key="1" title="如何打开游戏/应用设备号权限">
            <div>
              1、通用流程：设置-应用权限一权限设置，打开对应手机识别码或者imei权限。
              2、部分手机无法使用通用流程请自行百度符合自身机型的操作。
              注：安卓10机型获取设备权限操作，设置-隐私-广告-限制广告追踪(处于关闭状态下才能获取到)；苹果手机获取设备权限操作，设置一隐私一跟踪(是否允许跟踪)
            </div>
          </Collapse.Panel>
          <Collapse.Panel key="2" title="游戏有时无法登录">
            <div>
              1、通用流程：设置-应用权限一权限设置，打开对应手机识别码或者imei权限。
              2、部分手机无法使用通用流程请自行百度符合自身机型的操作。
              注：安卓10机型获取设备权限操作，设置-隐私-广告-限制广告追踪(处于关闭状态下才能获取到)；苹果手机获取设备权限操作，设置一隐私一跟踪(是否允许跟踪)
            </div>
          </Collapse.Panel>
          <Collapse.Panel key="3" title="什么是新老用户">
            <div>
              1、通用流程：设置-应用权限一权限设置，打开对应手机识别码或者imei权限。
              2、部分手机无法使用通用流程请自行百度符合自身机型的操作。
              注：安卓10机型获取设备权限操作，设置-隐私-广告-限制广告追踪(处于关闭状态下才能获取到)；苹果手机获取设备权限操作，设置一隐私一跟踪(是否允许跟踪)
            </div>
          </Collapse.Panel>
        </Collapse>
      </Tabs.Tab>
    </Tabs>
  );
};

export default HelpPage;
