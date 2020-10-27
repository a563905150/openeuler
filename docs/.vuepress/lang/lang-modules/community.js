/**
 * @file  社区模块国际化中文配置入口
 * */

module.exports = {
    cn: {
        NEWS: {
            NEWS: '新闻',
            MONTHS: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],           
        },
        BLOG: {
            BLOG: '博客',
            LABEL: '标签',
            FILE: '发布时间',
            BLOGGING: '写博客',
            READ_MORE: '查看全文 >>',
            DISCLAIMER_ZH: '【免责声明】本文仅代表作者本人观点，与本网站无关。本网站对文中陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完整性提供任何明示或暗示的保证。本文仅供读者参考，由此产生的所有法律责任均由读者本人承担。',
            DISCLAIMER_EN: "[Disclaimer] This article only represents the author's opinions, and is irrelevant to this website. This website is neutral in terms of the statements and opinions in this article, and does not provide any express or implied warranty of accuracy, reliability, or completeness of the contents contained therein. This article is for readers' reference only, and all legal responsibilities arising therefrom are borne by the reader himself.",
            OTHER_BLOG: "Ta的其他博文",
            CELECT_LABEL: "选择标签",
            CELECT_FILE: "选择发布时间",
            BROWSE: "浏览",
            VIEWED: "次",
            ALL: "全部"
        },
        MAILING_LIST: {
            TITLE: "邮件列表",
            GUIDE_CONTENT: [
                {
                    LEFT: {
                        LEFT_INFO: "在邮件列表页面选择要订阅的邮件列表",
                        LEFT_CIRCLE: "选择",
                        LEFT_IMG: "/img/community/maillist/mail1.png"
                    },
                    RIGHT: {
                        RIGHT_INFO: "填入邮件地址和名字，名字可选，点击订阅",
                        RIGHT_CIRCLE: "订阅",
                        LEFT_IMG: "/img/community/maillist/mail2.png"
                    }
                },
                {
                    LEFT: {
                        LEFT_INFO: "您的邮箱将收到一封来自邮件列表的电子邮件，要求您确认订阅了邮件列表，回复该电子邮件确认订阅",
                        LEFT_CIRCLE: "确认",
                        LEFT_IMG: "/img/community/maillist/mail3.png"
                    },
                    RIGHT: {
                        RIGHT_INFO: "您的邮箱收到来自一封来自邮件列表的欢迎邮件，即成功订阅该邮件列表",
                        RIGHT_CIRCLE: "成功",
                        LEFT_IMG: "/img/community/maillist/mail4.png"
                    }
                },
            ],
            SUBSCRIBE: {
                TITLE: "概要",
                PART_ONE: "openEuler社区的主要联系方式",
                PART_TWO: "要联系列表所有者，请试用以下电子邮件地址：community-owner@openeuler.org",
                PART_THREE: "要查看次列表及以往的邮件，请访问归档。",
                REMIND: "您不创建也可订阅。如果您愿意，请使用下面的表格。",
                INPUT_ADD: "您的电子邮件地址",
                INPUT_NAME: "您的名字（选填）",
                BUTTON: "订阅",
            },
            TABLE: {
                NAME: "列表名称",
                EMAIL_ADDRESS: "邮件地址",
                ARCHIVE: "归档路径",
                DESCRIPTION: "描述",
                NAME_H5: "名称",
                ARCHIVE_H5: "归档"
            },
            MAIL_ERROR: "邮件列表发生错误",
            SUBSCRIBE_ERROR: "邮件订阅发生错误",
            SUBSCRIBE_SUCCESS: "您已订阅成功",
            MAIL_ERROR: "邮箱填写错误"
        },
        CONTRIBUTION_H5: {
            TITLE: "贡献攻略",
            MOBILE_TITLE: "社区贡献攻略",
            GUIDE_CONTENT: [
                {
                    BUTTON: "签署CLA",
                    IMG: "/img/community/contribution/cla.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/cla.png',
                    VIDEO: "/img/community/contribution/cla.gif",
                    LINK: "/other/cla/"
                },
                {
                    BUTTON: "提出Issue",
                    IMG: "/img/community/contribution/issue.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/issue.png',
                    VIDEO: "/img/community/contribution/issue.gif",
                    LINK: "",
                    LINKADRESSLIST:{
                        TITLE:'请选择跳转的链接：',
                        LINKMESSAGE:[
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/wechat.png')",
                                TEXT:'微信',
                                LINKADRESS:'/building/'
                            },
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/email.png')",
                                TEXT:'邮件',
                                LINKADRESS:'/building/'
                            },
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/gitee.png')",
                                TEXT:'Gitee',
                                LINKADRESS:'/building/'
                            }
                        ]
                    }
                },
                {
                    BUTTON: "贡献代码",
                    IMG: "/img/community/contribution/contribution.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/contribution.png',
                    VIDEO: "/img/community/contribution/contribution.gif",
                    LINK: "https://gitee.com/openeuler"
                },
                {
                    BUTTON: "加入SIG",
                    IMG: "/img/community/contribution/sig.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/sig.png',
                    VIDEO: "/img/community/contribution/sig.gif",
                    LINK: "/sig/sig-list/"
                },
                {
                    BUTTON: "参选技术委员会",
                    IMG: "/img/community/contribution/commit.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/commit.png',
                    VIDEO: "/img/community/contribution/commit.gif",
                    LINK: "/sig/sig-list/sig-detail.html?id=21&name=TC&mail=tc%40openeuler.org"
                },
            ]
        },
        CONDUCT: {
            TITLE: "行为守则"
        },
        SERVICE: {
            SERVICE:''
        }
    },
    en: {
        NEWS: {
            NEWS: 'News',
            MONTHS: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        },
        BLOG: {
            BLOG: 'Blog',
            LABEL: 'Label',
            FILE: 'PublishDate',
            BLOGGING: 'Blogging', 
            READ_MORE: 'Read more >>',
            DISCLAIMER_ZH: '【免责声明】本文仅代表作者本人观点，与本网站无关。本网站对文中陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完整性提供任何明示或暗示的保证。本文仅供读者参考，由此产生的所有法律责任均由读者本人承担。',
            DISCLAIMER_EN: "[Disclaimer] This article only represents the author's opinions, and is irrelevant to this website. This website is neutral in terms of the statements and opinions in this article, and does not provide any express or implied warranty of accuracy, reliability, or completeness of the contents contained therein. This article is for readers' reference only, and all legal responsibilities arising therefrom are borne by the reader himself.",
            OTHER_BLOG: "Other blogs",
            CELECT_LABEL: "Select",
            CELECT_FILE: "Select",
            BROWSE: "",
            VIEWED: " Viewed",
            ALL: "All"
        },
        MAILING_LIST: {
            TITLE: "Mailing List",
            GUIDE_CONTENT: [
                {
                    LEFT: {
                        LEFT_INFO: "Select the mailing list to be subscribed to on the mailing list page.",
                        LEFT_CIRCLE: "Select",
                        LEFT_IMG: "/img/community/maillist/mail1.png"
                    },
                    RIGHT: {
                        RIGHT_INFO: "Enter the e-mail address and name (optional), and click Subscribe. ",
                        RIGHT_CIRCLE: "Subscribe ",
                        LEFT_IMG: "/img/community/maillist/mail2.png"
                    }
                },
                {
                    LEFT: {
                        LEFT_INFO: "Your mailbox will receive an e-mail from the mailing list, asking you to confirm that you have subscribed to the mailing list. Reply to the e-mail to confirm the subscription.",
                        LEFT_CIRCLE: "Confirm ",
                        LEFT_IMG: "/img/community/maillist/mail3.png"
                    },
                    RIGHT: {
                        RIGHT_INFO: "Your mailbox receives a welcome e-mail from the mailing list, indication that you have subscribed to the mailing list successfully.",
                        RIGHT_CIRCLE: "Succeed",
                        LEFT_IMG: "/img/community/maillist/mail4.png"
                    }
                },
            ],
            SUBSCRIBE: {
                TITLE: "Summary",
                PART_ONE: "The main contact endpoint of openEuler community",
                PART_TWO: "To contact the list owners, use the following email address: community-owner@openeuler.org",
                PART_THREE: "To see the prior posting to the list, visit the archives.",
                REMIND: "You can also subscribe without creating an account. If you wish to do so, please use the form below.",
                INPUT_ADD: "Your email address",
                INPUT_NAME: "Your name(optional)",
                BUTTON: "Subscribe"
            },
            TABLE: {
                NAME: "Name",
                EMAIL_ADDRESS: "Mailing List",
                ARCHIVE: "Archive",
                DESCRIPTION: "Description",
                NAME_H5: "Name",
                ARCHIVE_H5: "Archive"
            },
            MAIL_ERROR: "Error in mailing list",
            SUBSCRIBE_ERROR: "Mail subscription error",
            SUBSCRIBE_SUCCESS: "Success!",
            MAIL_ERROR: "Email error"
        },
        CONTRIBUTION_H5: {
            TITLE: "How to Contribute",
            MOBILE_TITLE: "How to Contribute",
            GUIDE_CONTENT: [
                {
                    BUTTON: "Sign CLA",
                    IMG: "/img/community/contribution/cla.png",
                    VIDEO: "/img/community/contribution/cla.gif",
                    MOBILEIMG:'/img/community/contribution/mobile-img/cla.png',
                    LINK: "/other/cla/"
                },
                {
                    BUTTON: "Submit an Issue",
                    IMG: "/img/community/contribution/issue.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/issue.png',
                    VIDEO: "/img/community/contribution/issue.gif",
                    LINK: "",
                    LINKADRESSLIST:{
                        TITLE:'Choose your link：',
                        LINKMESSAGE:[
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/wechat.png')",
                                TEXT:'Wechat',
                                LINKADRESS:'/building/'
                            },
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/email.png')",
                                TEXT:'Email',
                                LINKADRESS:'/building/'
                            },
                            {
                                ICONIMAGE:"url('/img/community/contribution/icon/gitee.png')",
                                TEXT:'Gitee',
                                LINKADRESS:'/building/'
                            }
                        ]
                    }
                },
                {
                    BUTTON: "Contribute Code",
                    IMG: "/img/community/contribution/contribution.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/contribution.png',
                    VIDEO: "/img/community/contribution/contribution.gif",
                    LINK: "https://gitee.com/openeuler"
                },
                {
                    BUTTON: "Join SIG",
                    IMG: "/img/community/contribution/sig.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/sig.png',
                    VIDEO: "/img/community/contribution/sig.gif",
                    LINK: "/sig/sig-list/"
                },
                {
                    BUTTON: "Participate in Technical Committee Election",
                    IMG: "/img/community/contribution/commit.png",
                    MOBILEIMG:'/img/community/contribution/mobile-img/commit.png',
                    VIDEO: "/img/community/contribution/commit.gif",
                    LINK: "/sig/sig-list/sig-detail.html?id=21&name=TC&mail=tc%40openeuler.org"
                },
            ]
        },
        CONDUCT: {
            TITLE: "Code of Covenant"
        }
    }
};