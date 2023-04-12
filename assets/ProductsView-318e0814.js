import{a as f}from"./axios-bff3f665.js";import{_ as v,M as P,o as i,a,b as t,i as w,t as _,l as c,s as r,F as g,f as x,y as U,m as C,r as p,e as b,u as $,q as M}from"./index-c607938f.js";import{C as V}from"./CPagination-efef9ab3.js";const L={props:{product:Object,on_finish:Function},data(){return{}},methods:{show(){this.modal.show()},hide(){this.modal.hide()},async handleRemove(){await f({method:"delete",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/admin/product/${this.product.id}`}).catch(l=>{console.log("error",l)}),console.log("已刪除"),this.hide(),this.$emit("on_finish")}},async mounted(){this.modal=new P(this.$refs.modal)}},D={ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},E={class:"modal-dialog"},A={class:"modal-content border-0"},O=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},I={class:"text-danger"},F={class:"modal-footer"},B=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function N(l,o,u,y,e,n){return i(),a("div",D,[t("div",E,[t("div",A,[O,t("div",S,[w(" 是否刪除 "),t("strong",I,_(u.product.title),1),w(" 商品(刪除後將無法恢復)。 ")]),t("div",F,[B,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=s=>n.handleRemove())}," 確認刪除 ")])])])],512)}const j=v(L,[["render",N]]),z={props:{status:String,product:{type:Object,default(){return{imagesUrl:[]}}},on_finish:Function},data(){return{newProduct:{imagesUrl:[]},modal:null}},watch:{product(l){this.newProduct={...l}}},methods:{show(){this.modal.show()},hide(){this.modal.hide()},async handleSubmit(){try{let l="",o="";this.status==="new"?(l="post",o="https://vue3-course-api.hexschool.io/v2/api/catboxy/admin/product"):(l="put",o=`https://vue3-course-api.hexschool.io/v2/api/catboxy/admin/product/${this.newProduct.id}`),await f({method:l,url:o,data:{data:this.newProduct}}).catch(u=>{throw u.response.data.message}),this.modal.hide(),this.$emit("on_finish")}catch(l){alert(l)}},addImage(){this.newProduct.imagesUrl||(this.newProduct.imagesUrl=[]),this.newProduct.imagesUrl.push("")},removeImage(l){this.newProduct.imagesUrl.splice(l,1)}},mounted(){this.modal=new P(this.$refs.modal)}},R={ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},G={class:"modal-header bg-dark text-white"},H={id:"productModalLabel",class:"modal-title"},J={key:0},K={key:1},Q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},X={class:"row"},Y={class:"col-sm-4"},Z={class:"mb-2"},tt={class:"mb-3"},ot=t("label",{for:"imageUrl",class:"form-label"},"輸入主圖片網址",-1),et=["src","alt"],st=t("hr",null,null,-1),lt=t("hr",null,null,-1),nt={class:"mb-3"},dt=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),it=["onUpdate:modelValue"],at=["src","alt"],ct=["onClick"],rt={class:"col-sm-8"},ut={class:"mb-3"},mt=t("label",{for:"title",class:"form-label"},"標題",-1),_t={class:"row"},ht={class:"mb-3 col-md-6"},pt=t("label",{for:"category",class:"form-label"},"分類",-1),bt={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"單位",-1),ft={class:"row"},vt={class:"mb-3 col-md-6"},yt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),wt={class:"mb-3 col-md-6"},Pt=t("label",{for:"price",class:"form-label"},"售價",-1),xt=t("hr",null,null,-1),kt={class:"mb-3"},Ut=t("label",{for:"description",class:"form-label"},"產品描述",-1),Ct={class:"mb-3"},$t=t("label",{for:"content",class:"form-label"},"說明內容",-1),Mt={class:"mb-3"},Vt={class:"form-check"},Lt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Dt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1);function At(l,o,u,y,e,n){return i(),a("div",R,[t("div",T,[t("div",q,[t("div",G,[t("h5",H,[u.status==="new"?(i(),a("span",J,"新增產品")):(i(),a("span",K,"編輯產品"))]),Q]),t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[ot,c(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.newProduct.imageUrl=s)},null,512),[[r,e.newProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.newProduct.imageUrl,alt:e.newProduct.title},null,8,et)]),st,t("div",null,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=(...s)=>n.addImage&&n.addImage(...s))}," 新增更多圖片 ")]),(i(!0),a(g,null,x(e.newProduct.imagesUrl,(s,m)=>(i(),a("div",{class:"mb-2",key:m},[lt,t("div",nt,[dt,c(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":h=>e.newProduct.imagesUrl[m]=h},null,8,it),[[r,e.newProduct.imagesUrl[m]]])]),t("img",{class:"img-fluid",src:s,alt:s},null,8,at),t("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:h=>n.removeImage(m)}," 刪除圖片 ",8,ct)]))),128))]),t("div",rt,[t("div",ut,[mt,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[2]||(o[2]=s=>e.newProduct.title=s)},null,512),[[r,e.newProduct.title]])]),t("div",_t,[t("div",ht,[pt,c(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[3]||(o[3]=s=>e.newProduct.category=s)},null,512),[[r,e.newProduct.category]])]),t("div",bt,[gt,c(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[4]||(o[4]=s=>e.newProduct.unit=s)},null,512),[[r,e.newProduct.unit]])])]),t("div",ft,[t("div",vt,[yt,c(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[5]||(o[5]=s=>e.newProduct.origin_price=s)},null,512),[[r,e.newProduct.origin_price]])]),t("div",wt,[Pt,c(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[6]||(o[6]=s=>e.newProduct.price=s)},null,512),[[r,e.newProduct.price]])])]),xt,t("div",kt,[Ut,c(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[7]||(o[7]=s=>e.newProduct.description=s)},null,512),[[r,e.newProduct.description]])]),t("div",Ct,[$t,c(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[8]||(o[8]=s=>e.newProduct.content=s)},null,512),[[r,e.newProduct.content]])]),t("div",Mt,[t("div",Vt,[c(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[9]||(o[9]=s=>e.newProduct.is_enabled=s)},null,512),[[U,e.newProduct.is_enabled]]),Lt])])])])]),t("div",Dt,[Et,t("button",{type:"button",class:"btn btn-primary",onClick:o[10]||(o[10]=s=>n.handleSubmit())}," 儲存 ")])])])],512)}const Ot=v(z,[["render",At]]),St={data(){return{status:"",product:{},products:{},pagination:{total_pages:"",current_page:1,has_pre:!1,has_next:!1,category:""}}},components:{CModalProductDelete:j,CModalProductEdit:Ot,CPagination:V},methods:{...C($,["setLoader"]),async addProduct(){this.status="new",this.product={},this.$refs.cModalProductEdit.show()},async editProduct(l){this.status="edit",this.product=l,this.$refs.cModalProductEdit.show()},async delProduct(l){this.product=l,this.$refs.cModalProductDelete.show()},async getAllProducts(l){try{this.setLoader(!0);const o=await f({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/admin/products/",params:{page:l||this.pagination.current_page}});this.products=o.data.products,this.pagination=o.data.pagination,this.setLoader(!1)}catch(o){alert(o.response.data.message)}}},async mounted(){this.setLoader(!0),await this.getAllProducts(),this.setLoader(!1)}},It={class:"container"},Ft={class:"row"},Bt={class:"col text-end mt-4"},Nt={class:"row"},jt={class:"col-12"},zt={class:"table align-middle"},Rt=t("thead",null,[t("tr",null,[t("td",null,"圖片"),t("td",null,"名稱"),t("td",null,"分類"),t("td",null,"單位"),t("td",null,"原價"),t("td",null,"售價"),t("td",null,"是否啟用"),t("td",null,"編輯"),t("td",null,"刪除")])],-1),Tt={style:{width:"200px"}},qt={key:0},Gt={key:1},Ht=["onClick"],Jt=["onClick"],Kt=t("tfoot",null,null,-1),Qt={class:"row"},Wt={class:"col-12"};function Xt(l,o,u,y,e,n){const s=p("CModalProductDelete"),m=p("CModalProductEdit"),h=p("CPagination");return i(),a(g,null,[b(s,{product:e.product,onOn_finish:o[0]||(o[0]=d=>n.getAllProducts()),ref:"cModalProductDelete"},null,8,["product"]),b(m,{product:e.product,status:e.status,onOn_finish:o[1]||(o[1]=d=>n.getAllProducts()),ref:"cModalProductEdit"},null,8,["product","status"]),t("div",It,[t("div",Ft,[t("div",Bt,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[2]||(o[2]=d=>n.addProduct())}," 建立新的產品 ")])]),t("div",Nt,[t("div",jt,[t("table",zt,[Rt,t("tbody",null,[(i(!0),a(g,null,x(e.products,d=>(i(),a("tr",{key:d.id},[t("td",Tt,[t("div",{style:M([{height:"100px","background-size":"cover","background-position":"center"},{"background-image":`url(${d.imageUrl})`}])},null,4)]),t("td",null,_(d.title),1),t("td",null,_(d.category),1),t("td",null,_(d.unit),1),t("td",null,_(d.origin_price),1),t("td",null,_(d.price),1),t("td",null,[d.is_enabled?(i(),a("span",qt,"啟用")):(i(),a("span",Gt,"未啟用"))]),t("td",null,[t("button",{onClick:k=>n.editProduct(d),type:"button",class:"btn btn-outline-secondary"},"編輯",8,Ht)]),t("td",null,[t("button",{onClick:k=>n.delProduct(d),type:"button",class:"btn btn-outline-secondary"},"刪除",8,Jt)])]))),128))]),Kt])])]),t("div",Qt,[t("div",Wt,[b(h,{total_pages:e.pagination.total_pages,onOn_page:n.getAllProducts},null,8,["total_pages","onOn_page"])])])])],64)}const oo=v(St,[["render",Xt]]);export{oo as default};
