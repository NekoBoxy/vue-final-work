import{C as g,a as y}from"./CFooter-12cf17cd.js";import{a as _}from"./axios-bff3f665.js";import{_ as f,r as a,o as c,a as i,b as r,e as o,w as h,t as s,k as d,l as C,v as x,F as k,g as m,h as w}from"./index-3186d88b.js";import"./cart-1869fbff.js";const N={components:{CNavbar:g,CFooter:y},data(){return{id:"",product:{},qty:0}},methods:{async getProduct(){const{id:l}=this.$route.params,e=await _({method:"get",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/product/${l}`});this.product=e.data.product,console.log(this.product)},async handleAddCart(){await _({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/cart",data:{data:{product_id:this.product.id,qty:parseInt(this.qty,10)}}}),console.log("已加入購物車")}},mounted(){this.id=this.$route.params.id,this.getProduct()}},V={class:"container"},q={class:"row"},F={class:"col"},A={"aria-label":"breadcrumb"},B={class:"breadcrumb"},P={class:"breadcrumb-item"},S={class:"breadcrumb-item"},j=o("li",{class:"breadcrumb-item active","aria-current":"page"},"商品細節",-1),D={class:"row"},L={class:"col-6 col-sm-6 gx-5 d-flex justify-content-center"},R=["src"],U={class:"col-6 col-sm-6 gx-5"},E={class:"row"},I={class:"col-12"},M={class:"col-12 pb-1"},T={class:"badge bg-primary rounded-pill"},z={class:"col-12 pb-1"},G={class:"col-12 pb-1"},H={class:"col-12 pb-1"},J={key:0,class:"h5"},K={key:1,class:"h6"},O={class:"col-12 pb-1"},Q={key:0,class:"h5"},W={class:"col-12 pb-1"},X={class:"input-group"},Y=w('<option selected>請選擇數量</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',11),Z=[Y];function $(l,e,oo,to,t,p){const v=a("CNavbar"),u=a("RouterLink"),b=a("CFooter");return c(),i(k,null,[r(v),o("div",V,[o("div",q,[o("div",F,[o("nav",A,[o("ol",B,[o("li",P,[r(u,{to:"/"},{default:h(()=>[m("首頁")]),_:1})]),o("li",S,[r(u,{to:"/products"},{default:h(()=>[m("產品一覽")]),_:1})]),j])])])]),o("div",D,[o("div",L,[o("img",{class:"img-fluid",src:t.product.imageUrl,style:{"object-fit":"cover"},alt:""},null,8,R)]),o("div",U,[o("div",E,[o("div",I,[o("h3",null,s(t.product.title),1)]),o("div",M,[o("span",T,s(t.product.category),1)]),o("div",z," 商品描述："+s(t.product.description),1),o("div",G," 商品內容："+s(t.product.content),1),o("div",H,[t.product.price?d("",!0):(c(),i("div",J,s(t.product.origin_price)+" 元",1)),t.product.price?(c(),i("del",K,"原價 "+s(t.product.origin_price)+" 元",1)):d("",!0)]),o("div",O,[t.product.price?(c(),i("div",Q,"現在只要 "+s(t.product.price)+" 元",1)):d("",!0)]),o("div",W,[o("div",X,[C(o("select",{class:"form-select",id:"selectNum","onUpdate:modelValue":e[0]||(e[0]=n=>t.qty=n),required:""},Z,512),[[x,t.qty]]),o("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...n)=>p.handleAddCart&&p.handleAddCart(...n))}," 加入購物車 ")])])])])])]),r(b)],64)}const ro=f(N,[["render",$]]);export{ro as default};
