import{C,a as w}from"./CFooter-d30409ae.js";import{a as p}from"./axios-bff3f665.js";import{_ as x,r as u,o as a,a as r,b as t,e as d,w as g,t as i,i as n,k as _,l as k,v as P,F as f,f as N,p as F,h as V,g as q}from"./index-a5e9ff6a.js";import"./cart-2066dc92.js";const I={components:{CNavbar:C,CFooter:w},data(){return{id:"",product:{},recentProducts:[],qty:0}},methods:{async handleProductClick(o){await this.$router.push(`/product/${o.id}`),await this.$router.go()},async getProduct(){try{const{id:o}=this.$route.params,e=await p({method:"get",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/product/${o}`});this.product=e.data.product}catch(o){alert(o.response.data.message)}},async getProducts(){try{const e=(await p({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/products"})).data.products.filter(v=>v.id!==this.id);this.recentProducts=[e[0],e[1],e[2]]}catch(o){alert(o.response.data.message)}},async handleAddCart(){try{await p({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/cart",data:{data:{product_id:this.product.id,qty:parseInt(this.qty,10)}}})}catch(o){alert(o.response.data.message)}}},mounted(){this.id=this.$route.params.id,this.getProduct(),this.getProducts()}},h=o=>(F("data-v-f96c3e77"),o=o(),V(),o),L={class:"wrapper"},S={class:"container"},j={class:"row"},B={class:"col"},A={"aria-label":"breadcrumb"},U={class:"breadcrumb"},D={class:"breadcrumb-item"},M={class:"breadcrumb-item"},R=h(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"商品細節",-1)),E={class:"row pb-5"},T={class:"col-12 col-lg-6 gx-5 d-flex justify-content-center"},Z=["src"],z={class:"col-12 col-lg-6 gx-5"},G={class:"row"},H={class:"col-12"},J={class:"col-12 pb-1"},K={class:"badge bg-primary rounded-pill"},O={class:"col-12 pb-1"},Q={class:"mb-2"},W={class:"col-12 pb-1"},X={class:"col-12 pb-1"},Y={key:0,class:"h5"},$={key:1,class:"h6"},tt={class:"col-12 pb-1"},ot={key:0,class:"h4"},st={class:"col-12 pb-1"},et={class:"input-group"},ct=q('<option selected data-v-f96c3e77>請選擇數量</option><option value="1" data-v-f96c3e77>1</option><option value="2" data-v-f96c3e77>2</option><option value="3" data-v-f96c3e77>3</option><option value="4" data-v-f96c3e77>4</option><option value="5" data-v-f96c3e77>5</option><option value="6" data-v-f96c3e77>6</option><option value="7" data-v-f96c3e77>7</option><option value="8" data-v-f96c3e77>8</option><option value="9" data-v-f96c3e77>9</option><option value="10" data-v-f96c3e77>10</option>',11),it=[ct],at=h(()=>t("div",{class:"row"},[t("div",{class:"col d-flex justify-content-center"},[t("div",null,[t("h5",null,"你可能也喜歡 ...")])])],-1)),rt={class:"row justify-content-center mb-3"},dt=["onClick"],nt=["src"],lt={class:"q-card-title"},pt={class:"row justify-content-between"},ut={class:"col text-start"},_t=h(()=>t("div",{class:"col text-end"},[t("svg",{width:"13",height:"22",viewBox:"0 0 13 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z",fill:"#F8FBF9"})])],-1));function ht(o,e,v,vt,s,l){const b=u("CNavbar"),m=u("RouterLink"),y=u("CFooter");return a(),r(f,null,[t("div",L,[d(b),t("div",S,[t("div",j,[t("div",B,[t("nav",A,[t("ol",U,[t("li",D,[d(m,{to:"/"},{default:g(()=>[n("首頁")]),_:1})]),t("li",M,[d(m,{to:"/products"},{default:g(()=>[n("產品一覽")]),_:1})]),R])])])]),t("div",E,[t("div",T,[t("img",{class:"img-fluid",src:s.product.imageUrl,style:{"object-fit":"cover"},alt:"produteImg"},null,8,Z)]),t("div",z,[t("div",G,[t("div",H,[t("h3",null,i(s.product.title),1)]),t("div",J,[t("span",K,i(s.product.category),1)]),t("div",O,[n(" 商品描述： "),t("div",Q,i(s.product.description),1)]),t("div",W,[n(" 商品內容： "),t("div",null,i(s.product.content),1)]),t("div",X,[s.product.price?_("",!0):(a(),r("div",Y,i(s.product.origin_price)+" 元",1)),s.product.price?(a(),r("del",$,i(s.product.origin_price)+" 元",1)):_("",!0)]),t("div",tt,[s.product.price?(a(),r("div",ot,"售價 "+i(s.product.price)+" 元",1)):_("",!0)]),t("div",st,[t("div",et,[k(t("select",{class:"form-select",id:"selectNum","onUpdate:modelValue":e[0]||(e[0]=c=>s.qty=c),required:""},it,512),[[P,s.qty]]),t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...c)=>l.handleAddCart&&l.handleAddCart(...c))}," 加入購物車 ")])])])])]),at,t("div",rt,[(a(!0),r(f,null,N(s.recentProducts,c=>(a(),r("div",{class:"col-12 col-md-6 col-lg-4 col-xxl-5 g-4",style:{display:"flex","align-items":"stretch"},key:c.id},[t("div",{class:"card",style:{width:"100%",cursor:"pointer"},onClick:mt=>l.handleProductClick(c)},[t("img",{src:c.imageUrl,class:"card-img-top",alt:"anotherImg"},null,8,nt),t("div",lt,[t("div",pt,[t("div",ut,[t("span",null,i(c.title),1)]),_t])])],8,dt)]))),128))])])]),d(y)],64)}const Ct=x(I,[["render",ht],["__scopeId","data-v-f96c3e77"]]);export{Ct as default};