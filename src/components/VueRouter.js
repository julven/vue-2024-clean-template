import { createRouter, createWebHistory } from "vue-router";

import  HomePage  from "./HomePage.vue"
import  ListPage   from "./ListPage.vue"
import  AccountPage from "./AccountPage.vue"
import AccountLoginPage from "./AccountLoginPage.vue"
import AccountEditPage from "./AccountEditPage.vue"
import ListViewPage from "./ListViewPage.vue"
import ListEditPage from "./ListEditPage.vue"
import ListAddPage from "./ListAddPage.vue"




let router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: "", name: null, component: "", children: [], }
        { path: "/", name: "HOME", component: HomePage, children: []},
        { path: "/list", name: null, children: [
            { path: "", name: "LIST", component: ListPage, children: [], },
            { path: "view/:id", name: "LIST_VIEW", component: ListViewPage, children: [], },
            { path: "edit/:id", name: "LIST_EDIT", component: ListEditPage, children: [], },
            { path: "add", name: "LIST_ADD", component: ListAddPage, children: [], }
        ]},
        { path: "/account", name: null, children: [
            { path: "", name: "ACCOUNT", component: AccountPage, children: [], },
            { path: "login", name: "ACCOUNT_LOGIN", component: AccountLoginPage, children: [], },
            { path: "edit", name: "ACCOUNT_EDIT", component: AccountEditPage, children: [], },
        ]},
        { path: "/:pathMatch(.*)*", component: { template: `<div><h3>Page does not exist</h3></div>` } },
    ]

})


export default router;
