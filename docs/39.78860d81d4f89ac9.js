"use strict";(self.webpackChunkfoodApp=self.webpackChunkfoodApp||[]).push([[39],{4039:(P,h,a)=>{a.r(h),a.d(h,{RecipesModule:()=>z});var m=a(177),p=a(7062),b=a(1060),E=a(3308),e=a(7705),j=a(1626);let u=(()=>{class n{constructor(t){this._HttpClient=t}getAllRecipes(t){return this._HttpClient.get("Recipe",{params:t})}getAllTags(){return this._HttpClient.get("tag")}onAddRecipe(t){return this._HttpClient.post("Recipe",t)}deleteRecipe(t){return this._HttpClient.delete(`Recipe/${t}`)}static{this.\u0275fac=function(i){return new(i||n)(e.KVO(j.Qq))}}static{this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var F=a(8256),f=a(4959),k=a(5351),y=a(8834),g=a(1806),I=a(9213),s=a(9417),S=a(6440),T=a(5596),R=a(9631),d=a(882),v=a(7250),C=a(6600),$=a(7268);function D(n,r){if(1&n&&(e.j41(0,"mat-option",22),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function M(n,r){if(1&n&&(e.j41(0,"mat-option",22),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function w(n,r){if(1&n&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.R7$(1),e.JRh(t.name)}}function A(n,r){if(1&n){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td",23),e.nrm(4,"img",24),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td"),e.DNE(12,w,2,1,"span",25),e.k0s(),e.j41(13,"td"),e.EFF(14),e.nI1(15,"date"),e.k0s(),e.j41(16,"td")(17,"button",26)(18,"mat-icon"),e.EFF(19,"more_horiz"),e.k0s()(),e.j41(20,"mat-menu",null,27)(22,"button",28),e.bIt("click",function(){const l=e.eBV(t).$implicit,c=e.XpG();return e.Njj(c.openViewDialog(l))}),e.j41(23,"mat-icon",29),e.EFF(24,"visibility"),e.k0s(),e.j41(25,"span",29),e.EFF(26,"View"),e.k0s()(),e.j41(27,"button",30)(28,"mat-icon",31),e.EFF(29,"edit Note"),e.k0s(),e.j41(30,"span",31),e.EFF(31,"Edit"),e.k0s()(),e.j41(32,"button",28),e.bIt("click",function(){const l=e.eBV(t).$implicit,c=e.XpG();return e.Njj(c.openDeleteDialog(l))}),e.j41(33,"mat-icon",32),e.EFF(34,"delete"),e.k0s(),e.j41(35,"span",32),e.EFF(36,"Delete"),e.k0s()()()()()}if(2&n){const t=r.$implicit,i=r.even,o=e.sdS(21),l=e.XpG();e.HbH(i?"bg-white":"bg-light"),e.R7$(2),e.JRh(t.name),e.R7$(2),e.Y8G("src",l.imgPath+t.imagePath,e.B4B),e.R7$(2),e.SpI(" ",t.price,""),e.R7$(2),e.JRh(t.description),e.R7$(2),e.JRh(t.tag.name),e.R7$(2),e.Y8G("ngForOf",t.category),e.R7$(2),e.JRh(e.i5U(15,10,t.creationDate,"dd/MM/YYYY")),e.R7$(3),e.Y8G("matMenuTriggerFor",o)}}const G=function(){return[5,10,25,100]};function x(n,r){if(1&n&&(e.j41(0,"mat-option",24),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function Y(n,r){if(1&n&&(e.j41(0,"mat-option",24),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}const O=[{path:"",component:(()=>{class n{constructor(t,i,o,l){this._RecipesService=t,this._ToastrService=i,this._CategoryService=o,this.dialog=l,this.listCategory=[],this.pageSize=10,this.pageNumber=1,this.searchVal="",this.tagId=0,this.categoryId=0,this.imgPath="https://upskilling-egypt.com:3006/"}ngOnInit(){this.getRecipes(),this.getTags(),this.getAllCategory()}getRecipes(){this._RecipesService.getAllRecipes({pageSize:this.pageSize,pageNumber:this.pageNumber,name:this.searchVal,tagId:this.tagId,categoryId:this.categoryId}).subscribe({next:i=>{console.log(i),this.listData=i.data,this.tableRes=i},error(i){console.log(i)}})}getAllCategory(){this._CategoryService.getAllCategories({pageSize:2e3,pageNumber:this.pageNumber,name:this.searchVal}).subscribe({next:i=>{console.log(i),this.listCategory=i.data},error(i){console.log(i)}})}getTags(){this._RecipesService.getAllTags().subscribe({next:t=>{console.log(t),this.listTags=t},error(t){console.log(t)}})}handlePageEvent(t){this.pageSize=t.pageSize,this.pageNumber=t.pageIndex,this.getRecipes()}openDeleteDialog(t){this.dialog.open(b.c,{data:{text:"Recipe",id:t.id,name:t.name}}).afterClosed().subscribe(o=>{console.log("The dialog was closed"),console.log(o),o&&this.onDeleteUser(o)})}onDeleteUser(t){this._RecipesService.deleteRecipe(t).subscribe({next:i=>{console.log(i),this._ToastrService.success("Recipe is deleted")},error(i){console.log(i)},complete:()=>{this.getRecipes()}})}openViewDialog(t){this.dialog.open(E.x,{data:{name:t.name,img:this.imgPath+t.imagePath,price:t.price,description:t.description,caregory:t.category,tag:t.tag,creation:t.creationDate,modification:t.modificationDate}}).afterClosed().subscribe(o=>{console.log("The dialog was closed"),console.log(o)})}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(u),e.rXU(F.tw),e.rXU(f.M),e.rXU(k.bZ))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-recipes"]],decls:70,vars:14,consts:[[1,"title-header"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-8"],[1,"item-text"],[1,"col-md-4","text-end"],["src","assets/image/imgHome.svg","alt",""],[1,"container","py-3","d-flex","justify-content-between"],[1,"light-gray"],["routerLink","add",1,"btn-main"],[1,"row"],[1,"col-6"],[1,"w-100"],[1,"example-full-width","w-100"],["matInput","","placeholder","Search by name...","value","Sushi",3,"ngModel","ngModelChange"],[1,"col-3"],[3,"ngModel","ngModelChange","selectionChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"table"],[3,"class",4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSize","pageSizeOptions","pageIndex","page"],[3,"value"],["width","90px",1,"pe-4"],["onerror","this.src='assets/image/668download.webp'","alt","",1,"w-100",3,"src"],[4,"ngFor","ngForOf"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-success"],["mat-menu-item",""],[1,"text-primary"],[1,"text-danger"]],template:function(i,o){1&i&&(e.j41(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h3"),e.EFF(6,"Recipes "),e.j41(7,"span",4),e.EFF(8,"Items"),e.k0s()(),e.j41(9,"p"),e.EFF(10,"You can now add your items that any user can order it from "),e.nrm(11,"br"),e.EFF(12,"the Application and you can edit"),e.k0s()(),e.j41(13,"div",5),e.nrm(14,"img",6),e.k0s()()()(),e.j41(15,"div",7)(16,"div")(17,"h4"),e.EFF(18,"Recipe Table Details"),e.k0s(),e.j41(19,"p",8),e.EFF(20,"You can check all details"),e.k0s()(),e.j41(21,"div")(22,"button",9),e.EFF(23,"Add New Item"),e.k0s()()(),e.j41(24,"mat-card")(25,"div",10)(26,"div",11)(27,"div",12)(28,"mat-form-field",13)(29,"mat-label"),e.EFF(30,"Search"),e.k0s(),e.j41(31,"input",14),e.bIt("ngModelChange",function(c){return o.searchVal=c}),e.k0s()()()(),e.j41(32,"div",15)(33,"mat-form-field")(34,"mat-label"),e.EFF(35,"Tag"),e.k0s(),e.j41(36,"mat-select",16),e.bIt("ngModelChange",function(c){return o.tagId=c})("selectionChange",function(){return o.getRecipes()}),e.j41(37,"mat-option",17),e.EFF(38,"All"),e.k0s(),e.DNE(39,D,2,2,"mat-option",18),e.k0s()()(),e.j41(40,"div",15)(41,"mat-form-field")(42,"mat-label"),e.EFF(43,"Category"),e.k0s(),e.j41(44,"mat-select",16),e.bIt("ngModelChange",function(c){return o.categoryId=c})("selectionChange",function(){return o.getRecipes()}),e.j41(45,"mat-option",17),e.EFF(46,"All"),e.k0s(),e.DNE(47,M,2,2,"mat-option",18),e.k0s()()()(),e.j41(48,"table",19)(49,"thead")(50,"th"),e.EFF(51,"item Name"),e.k0s(),e.j41(52,"th"),e.EFF(53,"Image"),e.k0s(),e.j41(54,"th"),e.EFF(55,"Price"),e.k0s(),e.j41(56,"th"),e.EFF(57,"Description"),e.k0s(),e.j41(58,"th"),e.EFF(59,"Tag"),e.k0s(),e.j41(60,"th"),e.EFF(61,"Category"),e.k0s(),e.j41(62,"th"),e.EFF(63,"Creation Date"),e.k0s(),e.j41(64,"th"),e.EFF(65,"Actions"),e.k0s()(),e.j41(66,"tbody"),e.DNE(67,A,37,13,"tr",20),e.nI1(68,"searchRecipes"),e.k0s()(),e.j41(69,"mat-paginator",21),e.bIt("page",function(c){return o.handlePageEvent(c)}),e.k0s()()()),2&i&&(e.R7$(31),e.Y8G("ngModel",o.searchVal),e.R7$(5),e.Y8G("ngModel",o.tagId),e.R7$(3),e.Y8G("ngForOf",o.listTags),e.R7$(5),e.Y8G("ngModel",o.categoryId),e.R7$(3),e.Y8G("ngForOf",o.listCategory),e.R7$(20),e.Y8G("ngForOf",e.i5U(68,10,o.listData,o.searchVal)),e.R7$(2),e.Y8G("length",null==o.tableRes?null:o.tableRes.totalNumberOfRecords)("pageSize",o.pageSize)("pageSizeOptions",e.lJ4(13,G))("pageIndex",o.pageNumber))},dependencies:[m.Sq,p.Wk,y.iY,g.kk,g.fb,g.Cp,I.An,s.me,s.BC,s.vS,S.iy,T.RN,R.fg,d.rl,d.nJ,v.VO,C.wT,m.vh,$.o]})}}return n})()},{path:"add",component:(()=>{class n{constructor(t,i,o,l){this._CategoryService=t,this._ToastrService=i,this._RecipesService=o,this._Router=l,this.listCategory=[],this.tagId=0,this.categoryId=0,this.recipeForm=new s.gE({name:new s.MJ(null),description:new s.MJ(null),price:new s.MJ(null),tagId:new s.MJ(null),categoriesIds:new s.MJ(null)})}ngOnInit(){this.getTags(),this.getAllCategory()}getAllCategory(){this._CategoryService.getAllCategories({pageSize:2e3}).subscribe({next:i=>{console.log(i),this.listCategory=i.data},error(i){console.log(i)}})}getTags(){this._RecipesService.getAllTags().subscribe({next:t=>{console.log(t),this.listTags=t},error(t){console.log(t)}})}sendData(t){let i=new FormData;i.append("name",t.value.name),i.append("description",t.value.description),i.append("price",t.value.price),i.append("tagId",t.value.tagId),i.append("categoriesIds",t.value.categoriesIds),this._RecipesService.onAddRecipe(i).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message,"Successfully")},error:o=>{console.log(o)},complete:()=>{this._Router.navigate(["/dashboard/admin/recipes"])}})}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(f.M),e.rXU(F.tw),e.rXU(u),e.rXU(p.Ix))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-add-edit-recipe"]],decls:52,vars:3,consts:[[1,"container"],[1,"row","text"],[1,"col-8"],[1,"recipe"],[1,"light-gray"],[1,"col-4","text-end"],["routerLink","/dashboard/admin/recipes",1,"btn-main","w-75","m-4"],[1,"fa-solid","fa-arrow-right"],[1,"row"],[1,"col-9","mx-auto"],[1,"example-form","row",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"example-full-width","w-100","rounded-3","overflow-hidden"],["matInput","","placeholder","Ex. Pizza","value","Sushi","formControlName","name"],[1,"w-100","rounded-3","overflow-hidden"],["formControlName","tagId"],[3,"value",4,"ngFor","ngForOf"],[1,"col-6"],["matInput","","placeholder","Ex. 100EGP","type","number","value","Sushi","formControlName","price"],["formControlName","categoriesIds","multiple",""],["matInput","","placeholder","Ex. It makes me feel...","formControlName","description"],[1,"d-flex","justify-content-end"],["type","button","routerLink","../",1,"btn","btn-outline-success","mx-3"],["type","submit",1,"btn-main"],[3,"value"]],template:function(i,o){1&i&&(e.j41(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h3"),e.EFF(5,"Edit the "),e.j41(6,"span",3),e.EFF(7,"Recipes !"),e.k0s()(),e.j41(8,"p",4),e.EFF(9,"you can now fill the meals easily using the table and form ,"),e.nrm(10,"br"),e.EFF(11," click here and sill it with the table !"),e.k0s()(),e.j41(12,"div",5)(13,"button",6),e.EFF(14," All Recipes "),e.j41(15,"span"),e.nrm(16,"i",7),e.k0s()()()(),e.j41(17,"div",8)(18,"div",9)(19,"form",10),e.bIt("ngSubmit",function(){return o.sendData(o.recipeForm)}),e.j41(20,"div",11)(21,"mat-form-field",12)(22,"mat-label"),e.EFF(23,"Recipe Name"),e.k0s(),e.nrm(24,"input",13),e.k0s()(),e.j41(25,"div",11)(26,"mat-form-field",14)(27,"mat-label"),e.EFF(28,"Tag"),e.k0s(),e.j41(29,"mat-select",15),e.DNE(30,x,2,2,"mat-option",16),e.k0s()()(),e.j41(31,"div",17)(32,"mat-form-field",12)(33,"mat-label"),e.EFF(34,"Price"),e.k0s(),e.nrm(35,"input",18),e.k0s()(),e.j41(36,"div",17)(37,"mat-form-field",14)(38,"mat-label"),e.EFF(39,"Category"),e.k0s(),e.j41(40,"mat-select",19),e.DNE(41,Y,2,2,"mat-option",16),e.k0s()()(),e.j41(42,"div",11)(43,"mat-form-field",12)(44,"mat-label"),e.EFF(45,"Leave a comment"),e.k0s(),e.nrm(46,"textarea",20),e.k0s()(),e.j41(47,"div",21)(48,"button",22),e.EFF(49,"Close"),e.k0s(),e.j41(50,"button",23),e.EFF(51,"Save"),e.k0s()()()()()()()),2&i&&(e.R7$(19),e.Y8G("formGroup",o.recipeForm),e.R7$(11),e.Y8G("ngForOf",o.listTags),e.R7$(11),e.Y8G("ngForOf",o.listCategory))},dependencies:[m.Sq,p.Wk,s.qT,s.me,s.Q0,s.BC,s.cb,R.fg,d.rl,d.nJ,s.j4,s.JD,v.VO,C.wT],styles:[".text[_ngcontent-%COMP%]{background-color:#f0ffef;border-radius:10px;margin-block:15px;margin-inline:5px;padding-block:30px;padding-inline:10px;font-weight:500}"]})}}return n})()}];let J=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[p.iI.forChild(O),p.iI]})}}return n})();var V=a(3885);let z=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[m.MD,J,V.G]})}}return n})()}}]);