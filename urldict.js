import start from "./components/start.vue";
import loading from "./components/loading.vue";
import notfound from "./components/notfound.vue";

import start_loading from "./components/start_loading.vue";
import test from "./components/test.vue";
import detail_red from "./components/detail_redirect";
import maingamepage from "./components/page.vue";
import eye from "./components/protect_physical/eye";
import stayup from "./components/protect_physical/stayup";
import sw from "./components/protect_physical/stayupwarning";
import timeline from "./components/timeline";
import phone from "./components/phone";
import yynlp from "./components/yiyu_nlp";
export default{
    routes:[
        {
            path:"/",component:start
        },
        {
            path:"/start",component:start
        },
        {
            path:"/loading",component:loading,name:'loading'
        },
        {
            path:"*",component:notfound
        },
        
        {
            path:"/test",
            component:test,
        },
        {
            path:"/startloading",component:start_loading
        },
        {
            path:"/detail",
            component:detail_red
        },
        {
            path:"/story",
            redirect:"/detail"
        },
        
        {
            path:"/game",
            component:maingamepage,
            
        },
        {
            path:"/eye",
            component:eye,
            
        },
        {
            path:"/stayup",
            component:stayup,
            
        },
        {
            path:"/sw",
            component:sw,
            
        },
        {
            path:"/timeline",
            component:timeline,
            
        },
        {
            path:"/phone",
            component:phone
        },
        {
            path:"/yiyunlp",
            component:yynlp
        }
    ]
}
    
