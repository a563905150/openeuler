/**
 * @file  资料组维护数据文件
 * */

module.exports = {
    cn: {
        MEETUPS_LIST : [
            {
                ID: 1,
                MEETUPS_TITLE : '开源操作系统 金陵技术论坛',
                MEETUPS_IMG: '/img/meetups/1.png',
                MEETUPS_DATE: '2020-12-24',
                MEETUPS_MONTH: '十月',
                MEETUPS_ADDRESS: '江苏润和 meet-up',
                MEETUPS_DESC: '进入2020年，信创产业飞速发展，以操作系统为代表的基础软件迎来快速发展机遇，此次论坛聚集国内开源操作系统的技术大咖，分享以HopeEdge，openEuler为代表的操作系统的发展现状，并与硬件厂商、解决方案伙伴们一起探讨未来，携手共建繁荣的信创生态。',
                MEETUPS_FLOW_PATH: [
                    {
                        FLOW_PATH_NAME: '签到',
                        FLOW_PATH_TIME: '13 : 30'
                    },
                    {
                        FLOW_PATH_NAME: '开幕',
                        FLOW_PATH_TIME: '13 : 55'
                    },
                    {
                        FLOW_PATH_NAME: 'iSula与轻量化操作系统HopeEdge',
                        FLOW_PATH_TIME: '14 : 00'
                    },
                    {
                        FLOW_PATH_NAME: 'Linux内核安全系统设计与演化',
                        FLOW_PATH_TIME: '14 : 35 '
                    },
                    {
                        FLOW_PATH_NAME: '茶歇',
                        FLOW_PATH_TIME: '15 : 10'
                    },
                    {
                        FLOW_PATH_NAME: '操作系统可信技术的发展',
                        FLOW_PATH_TIME: '15 : 25'
                    },
                    {
                        FLOW_PATH_NAME: 'openEuler轻量级虚拟化引擎StratoVirt',
                        FLOW_PATH_TIME: '16 : 00'
                    },
                    {
                        FLOW_PATH_NAME: '伙伴案例分享',
                        FLOW_PATH_TIME: '16 : 35'
                    },
                    {
                        FLOW_PATH_NAME: '结束',
                        FLOW_PATH_TIME: '17 : 00 '
                    },
                ],
                MEETINGS_INFO: {
                    TITLE: '参会信息',
                    ADDRESS_IMG: '/img/meetups/address.png',
                    ADDRESS_UP: '润和创智中心',
                    ADDRESS_DOWN: [
                        '南京市雨花区软件大道168号','润和创智中心','二楼会议大厅'
                    ],
                    APPLY_TEXT: '扫码报名',
                    APPLY_QRCODE: '/img/meetups/qrcode.png',
                    MAP_IMG: '/img/meetups/map1.png'
                }
                
            }
        ]
    },
    en: {
        MEETUPS_LIST : [
            {
                ID: 1,
                MEETUPS_TITLE : 'Nanjing Operating System Seminar 2020',
                MEETUPS_IMG: '/img/meetups/1.png',
                MEETUPS_DATE: '2020-12-24',
                MEETUPS_MONTH: 'October',
                MEETUPS_ADDRESS: 'Jiangsu HopeRun meet-up',
                MEETUPS_DESC: 'In 2020, the information application innovation industry is developing rapidly, and basic software represented by OSs is embracing opportunities. In this event, we invite technical experts of open source OSs in China to present the latest OS developments, such as HopeEdge and openEuler, and discuss with hardware vendors and solution partners on building a prosperous information application innovation ecosystem together.',
                MEETUPS_FLOW_PATH: [
                    {
                        FLOW_PATH_NAME: 'Sign-in',
                        FLOW_PATH_TIME: '13 : 30'
                    },
                    {
                        FLOW_PATH_NAME: 'Opening',
                        FLOW_PATH_TIME: '13 : 55'
                    },
                    {
                        FLOW_PATH_NAME: 'iSula and lightweight operations',
                        FLOW_PATH_TIME: '14 : 00'
                    },
                    {
                        FLOW_PATH_NAME: 'Linux kernel security system design',
                        FLOW_PATH_TIME: '14 : 35 '
                    },
                    {
                        FLOW_PATH_NAME: 'Tea break',
                        FLOW_PATH_TIME: '15 : 10'
                    },
                    {
                        FLOW_PATH_NAME: 'Development of trusted OS technology',
                        FLOW_PATH_TIME: '15 : 25'
                    },
                    {
                        FLOW_PATH_NAME: 'StratoVirt: openEuler lightweight virtualization engine',
                        FLOW_PATH_TIME: '16 : 00'
                    },
                    {
                        FLOW_PATH_NAME: 'Partner case sharing',
                        FLOW_PATH_TIME: '16 : 35'
                    },
                    {
                        FLOW_PATH_NAME: 'End',
                        FLOW_PATH_TIME: '17 : 00 '
                    },
                ],
                MEETINGS_INFO: {
                    ADDRESS_IMG: '/img/meetups/address.png',
                    ADDRESS_UP: 'Runhe Innovation & Intelligence Center',
                    ADDRESS_DOWN: [
                        'No.168 Ruanjian Avenue','Yuhua District','Nanjing'
                    ],
                    APPLY_QRCODE: '/img/meetups/qrcode.png',
                    MAP_IMG: '/img/meetups/map1.png'
                }
                
            }
        ]
    }
};
