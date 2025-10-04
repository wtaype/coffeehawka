import{$ as a,w as $,g as R,d as k,a as w,b as F,q as E,c as S,e as L,f as sa,h as _,u as ia,s as ta,i as z,j as U,k as ra,M as x,l as C,m as D,n as la,o as na,p as ca,r as V,N as da,t as G,v as J}from"./widev-D5r1cEpO.js";/* empty css              */function ua(){const e=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <!-- <span class="crearCuenta">Crear cuenta</span> -->
      </div>
    </div>
  </div>
</div>`,n=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>

        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-venus-mars"></i>
            <select id="regGenero" required>
              <option value="femenino" selected>Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,h=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;a(function(){let d="smiles",i="configuracion",u=3e3,A="wiAuthIn",M="wiAuthRol",O="smile",P="Cielo";a(document).on("click",".Login",function(){l("loginModal")}),a(".registrar").click(()=>l("registroModal")),a(".crearCuenta").click(()=>{l("registroModal"),p("loginModal")}),a(".conCuenta").click(()=>{l("loginModal"),p("registroModal")}),a(".olvidastePass").click(()=>{l("recuperarModal"),p("loginModal")}),a(".volverLogin").click(()=>{l("loginModal"),p("recuperarModal")}),a(".togglePass").click(function(){const o=a(this).siblings("input"),t=o.attr("type")==="password";o.attr("type",t?"text":"password"),a(this).toggleClass("fa-eye fa-eye-slash")}),a('.miauth input:not([type="checkbox"])').on("click",function(){$(this,a(this).attr("placeholder"))}),a("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){a(this).val(a(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([o,t])=>{a(o).on("input keyup",r=>{a(t).removeClass("inactivo"),r.key==="Enter"&&(a(t).click(),a(t).addClass("inactivo"))})});const T={regEmail:[o=>o.toLowerCase(),o=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(o)||"Correo inválido"],regUsuario:[o=>o.toLowerCase().replace(/[^a-z0-9_]/g,""),o=>o.length>=3||"Usuario 3-20 caracteres"],regNombre:[o=>o.trim(),o=>o.length>0||"Ingrese nombre"],regApellidos:[o=>o.trim(),o=>o.length>0||"Ingrese apellidos"],regGenero:[o=>o,o=>["femenino","masculino"].includes(o)||"Selecciona género"],regFechaNacimiento:[o=>o,o=>ca(o)>=13||"Tienes que ser mayor de 13 años"],regPassword:[o=>o,o=>o.length>=6||"Mínimo 6 caracteres"],regPassword1:[o=>o,o=>o===a("#regPassword").val()||"Contraseñas no coinciden"]};a.each(T,function(o,[t,r]){a(`#${o}`).on("blur change",function(){const c=t(a(this).val());a(this).val(c);const f=r(c);f!==!0&&$(this,f,"error")})});let N=!1;a("#regUsuario").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const r=(await R(k(w,d,o))).exists();N=!r,$(this,`Usuario ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}});let q=!1;a("#regEmail").on("blur focus",async function(){const o=a(this).val();if(o.length>=3)try{const r=!(await F(E(S(w,d),L("email","==",o)))).empty;q=!r,$(this,`Email ${r?"no disponible":"disponible ✅"}`,r?"error":"success","top",7e3)}catch(t){console.error(t)}}),a("#Registrar").click(async function(){const o=[[N,a("#regUsuario")[0],"Usuario no disponible"],[q,a("#regEmail")[0],"Email no disponible"],...Object.entries(T).map(([t,[r,c]])=>{const f=a(`#${t}`),v=r(f.val()),y=c(v);return[y===!0,f[0],y!==!0?y:""]})];for(const[t,r,c]of o)if(!t&&c&&($(r,c,"error"),r.focus(),!0))return;try{const t=["regEmail","regUsuario","regNombre","regApellidos","regGenero","regPassword"],[r,c,f,v,y,X]=t.map(ea=>a("#"+ea).val().trim()),I={masculino:["Cielo|#0EBEFF","Paz|#29C72E"],femenino:["Dulce|#FF5C69","Mora|#7000FF"]}[y]||["Paz|#29C72E","Cielo|#0EBEFF"];P=I[Math.floor(Math.random()*I.length)];const{user:j}=await sa(_,r,X);await Promise.all([ia(j,{displayName:c}),ta(j)]),console.log("Registro completo en Auth ✅"+Date());const aa=k(w,d,c);await z(aa,{usuario:c,email:r,nombre:f,apellidos:v,genero:y,rol:O,fechaNacimiento:ra(a("#regFechaNacimiento").val()),creacion:U(),uid:j.uid});const oa=k(w,i,c);await z(oa,{usuario:c,email:r,tema:P,actualizacion:U()}),console.log("Registro completo en Firestore ✅"+Date()),x("Registro completado! ✅")}catch(t){x({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[t.code]||t.message)||console.error(t)}finally{C(A,"wIn",24),C(M,O,24),C("wiTema",P,72),setTimeout(()=>D(O),u)}}),a("#Login").click(async function(){try{const[o,t]=["#email","#password"].map(y=>a(y).val());let r=o,c=null,f=null;if(!o.includes("@")){if(c=await R(k(w,d,o)),!c.exists())throw new Error("Usuario no encontrado");r=c.data().email;try{f=(await R(k(w,"configuracion",o))).data()?.tema}catch{}}await la(_,r,t);const v=c?.data()?.rol||"smile";C(A,"wIn",24),C(M,v,24),f&&C("wiTema",f,72),D(v)}catch(o){x({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[o.code]||o.message,"error"),console.error(o)}finally{showLoading(!1)}}),a("#Recuperar").click(async function(){try{const[o,t]=["#recEmail","#recFechaNacimiento"].map(v=>a(v).val()),r=o.includes("@")?o:await(async()=>{const v=await R(k(w,d,o));return v.exists()?v.data().email:null})();if(!r)return x("Usuario no registrado","error");const c=await F(E(S(w,d),L("email","==",r)));if(c.empty)return x("Email incorrecto o no existe","error");if(c.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==t)return x("Fecha de nacimiento incorrecta","error");await na(_,r),x("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(o){console.error(o)}})}),a("body").append(e+n+h);function s(){const d=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.input-icon input,.input-icon select{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus,.input-icon select:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}",i=a(".wiAuthCss");i.length?i.text(d):a("head").append(`<style class="wiAuthCss">${d}</style>`)}const l=d=>{const i=a(`#${d}`).addClass("active");a("body").addClass("modal-open"),setTimeout(()=>{i.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},p=d=>{a(`#${d}`).removeClass("active"),a(".modal.active").length||a("body").removeClass("modal-open")},b=()=>{const d=()=>{a(".modal").removeClass("active"),a("body").removeClass("modal-open")};a(document).off(".authModals").on("click.authModals",".close-modal",d).on("click.authModals",".modal",i=>{a(i.target).is(".modal")&&d()}).on("keydown.authModals",i=>{i.key==="Escape"&&d()})};s(),b()}ua();const W=()=>a(".webz").each((e,n)=>a(n).find(".webx").height(a(n).find(".weby").outerHeight())),Z=(()=>{let e;return()=>(clearTimeout(e),e=setTimeout(W,120))})();a(Z);a(window).on("load resize orientationchange",Z);const pa=()=>a(document).off(".wilang").on("click.wilang",".wilang-trigger",e=>{e.stopPropagation();const n=a(e.currentTarget).closest(".midw_v1");n.find(".wilang-content").toggleClass("show"),n.find(".fa-chevron-down").toggleClass("rotated")}).on("click.wilang",".wilang-item",function(e){e.stopPropagation(),a(".wilang-content").removeClass("show"),a(".fa-chevron-down").removeClass("rotated"),setTimeout(()=>location.href=a(this).data("url"),200)}).on("click.wilang",e=>{a(e.target).closest(".midw_v1").length||(a(".wilang-content").removeClass("show"),a(".fa-chevron-down").removeClass("rotated"))});a(()=>pa());const g=window.smile||{},m={COL_CARTAS:g.colCartas||"cartasdb",COL_HOJAS:g.colHojas||"hojasdb",C_CARTAS:g.cacheCartasKey||"cartasdbCachePublic",C_HOJAS:g.cacheHojasKey||"hojasdbCachePublic",HRS:g.cacheHoras||6,LIM_CARTAS:g.limCartas||500,LIM_HOJAS:g.limHojas||50,IMG_FALLBACK:g.imgFallback||"/smile.png",ICONO_HOJA:g.iconoHoja||"fa-utensils",CURRENCY:g.currency||"S/",SHOW_ICONS:g.showIcons!==!1},H=e=>String(e||"").toLowerCase()==="activo",ma=e=>e==null||e===""?"":`${m.CURRENCY}${(+e).toFixed(2)}`,ha=e=>`
    <div class="menu-item">
      <div class="item-header">
        <h3>${m.SHOW_ICONS&&e.icono?`<i class="fas ${e.icono}"></i> `:""}${e.titulo||""}</h3>
        <span class="price">${ma(e.precio)}</span>
      </div>
      ${e.descripcion?`<p class="description">${e.descripcion}</p>`:""}
      <div class="dotted-line"></div>
    </div>`,fa=(e,n,h)=>{const s=h[e]||{},l=s.icono||m.ICONO_HOJA,p=s.imagen||m.IMG_FALLBACK,b=s.nota?`<p class="menu-note"><i class="fas fa-info-circle"></i> ${s.nota}</p>`:"";return`
    <div class="webz" data-hoja="${e}">
      <div class="webx">
        <img src="${p}" alt="Menú ${s.titulo||`Hoja ${e}`}" loading="lazy"
             onerror="this.src='${m.IMG_FALLBACK}';this.onerror=null;">
        <div class="image-overlay"><i class="fas ${l}"></i></div>
      </div>
      <div class="weby">
        <div class="menu-column">
          <header class="menu-header">
            <h2 class="menu-category"><i class="fas ${l}"></i> ${s.titulo||`Hoja ${e}`}</h2>
            ${b}
          </header>
          <div class="menu-content">
            ${n.length?n.map(ha).join(""):'<p class="no-items">No hay elementos disponibles</p>'}
          </div>
        </div>
      </div>
    </div>
    <div class="separador"><span class="sep-number">${e}</span></div>`},B=()=>{const e={en:{name:"English",flag:"https://www.svgrepo.com/show/508668/flag-us.svg",url:"https://coffeehawka.web.app"},es:{name:"Español",flag:"https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg",url:"https://cartadehawka.web.app"}},n=Object.entries(e).map(([h,s])=>`<div class="wilang-item" data-lang="${h}" data-url="${s.url}"><img src="${s.flag}" alt="${s.name}" class="flag-icon"><span>${s.name}</span></div>`).join("");return`<header class="hd"><h1 class="wilang"><span class="wilang_titu">Language: </span><div class="midw_v1"><div class="wilang-trigger"><div class="wilang-selected"><img src="${e.en.flag}" alt="${e.en.name}" class="flag-icon"><span>${e.en.name}</span></div><i class="fas fa-chevron-down"></i></div><div class="wilang-content">${n}</div></div></h1></header>`},Y=()=>`
  <!-- Modals (FOOTER) -->
  <div id="foo-about" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Close">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-info-circle"></i></div>
        <h3>About the app</h3>
      </div>
      <p>Coffee Hawka allows you to display your menu by pages with prices, descriptions and icons. Optimized for mobile and local cache.</p>
      <ul class="foo-list">
        <li>Fast loading with cache</li>
        <li>Multi-language support (selector in header)</li>
        <li>Responsive and accessible design</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Got it</button>
      </div>
    </div>
  </div>

  <div id="foo-priv" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Close">&times;</button>
      <div class="foo-head">
        <div class="foo-badge"><i class="fas fa-user-shield"></i></div>
        <h3>Privacy policies</h3>
      </div>
      <p>We do not collect personal data without your consent. Menu content is processed and cached in your browser.</p>
      <ul class="foo-list">
        <li>No tracking cookies</li>
        <li>Local cache control (Ctrl+Shift+R to clear)</li>
        <li>Lazy loading images</li>
      </ul>
      <div class="foo-actions">
        <button class="foo-btn foo-btn--primary foo-ok">Got it</button>
      </div>
    </div>
  </div>

  <div id="foo-recl" class="foomodal" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="foo-dialog">
      <button class="foo-close" aria-label="Close">&times;</button>
      <div class="foo-head">
        <img src="./libroReclamos.png" alt="Complaints Book" class="foo-hero">
        <h3>Complaints book</h3>
      </div>
      <form id="reclamosForm" class="foo-form" novalidate>
        <div class="foo-grid">
          <label> Full name
            <input name="nombres" type="text" required placeholder="Your full name" />
          </label>
          <label> Email
            <input name="email" type="email" required placeholder="youremail@domain.com" />
          </label>
          <label> Phone
            <input name="telefono" type="tel" placeholder="+51 999 999 999" />
          </label>
          <label> Order # (optional)
            <input name="pedido" type="text" placeholder="Ex: A123" />
          </label>
          <label class="foo-span2"> Complaint details
            <textarea name="detalle" required rows="4" placeholder="Describe your complaint..."></textarea>
          </label>
          <label class="foo-span2 foo-chk">
            <input type="checkbox" name="consent" required />
            I agree to the use of my data to follow up on my complaint.
          </label>
        </div>
        <div class="foo-actions">
          <button type="button" class="foo-btn foo-btn--ghost foo-cancel">Cancel</button>
          <button type="submit" class="foo-btn foo-btn--primary">Send</button>
        </div>
      </form>
    </div>
  </div>

  <footer class="foo">
    <div class="foo-inner">
      <nav class="foo-links">
        <button class="lk about" data-foomodal="#foo-about" type="button">About the app</button>
        <button class="lk priv" data-foomodal="#foo-priv" type="button">Privacy policies</button>
        <button class="lk recl" data-foomodal="#foo-recl" type="button">
          <img src="./libroReclamos.png" alt="Complaints Book" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;">
          Complaints book
        </button>
      </nav>
      <div class="brand">
        Created with <i class="fa fa-heart"></i> by
        <a class="lkme" href="https://wtaype.github.io/" target="_blank" rel="noopener">@wilder.taype</a>
        | <span class="Login"> Login</span> | <span class="wty">2025</span>
      </div>
    </div>
  </footer>`,K=(e,n)=>{const h=a("#menu-app"),l=e.filter(i=>H(i.estado)).reduce((i,u)=>((i[u.hoja=+u.hoja||0]||(i[u.hoja]=[])).push(u),i),{}),p=Object.keys(n).map(Number).filter(i=>i>0).sort((i,u)=>i-u);if(!p.length)return h.html(B()+'<p class="no-items txc">No hay menús disponibles</p>'+Y());const b=p.map(i=>{const u=(l[i]||[]).sort((A,M)=>+(A.orden||0)-+(M.orden||0)||String(A.titulo||"").localeCompare(String(M.titulo||"")));return fa(i,u,n)}).join("");h.html(B()+b+Y());const d=h.find("img").toArray();Promise.all(d.map(i=>i.complete?Promise.resolve():new Promise(u=>{i.onload=i.onerror=u}))).then(()=>document.fonts?.ready||Promise.resolve()).then(()=>setTimeout(W,80))};async function Q(){const e=/\brefresh=1\b/i.test(location.search)||g.noCache,n=(G(m.C_CARTAS)||[]).filter(l=>H(l.estado)),h=(G(m.C_HOJAS)||[]).filter(l=>H(l.estado)),s=Object.fromEntries(h.map(l=>[l.numero,l]));n.length&&Object.keys(s).length&&!e&&K(n,s);try{const[l,p]=await Promise.all([F(E(S(w,m.COL_CARTAS),L("estado","==","activo"),J(m.LIM_CARTAS))),F(E(S(w,m.COL_HOJAS),L("estado","==","activo"),J(m.LIM_HOJAS)))]),b=l.docs.map(u=>({id:u.id,...u.data()})),d=p.docs.map(u=>({id:u.id,...u.data()})),i=Object.fromEntries(d.map(u=>[u.numero,u]));C(m.C_CARTAS,b,m.HRS),C(m.C_HOJAS,d,m.HRS),K(b,i)}catch(l){console.error("Error cargando menú:",l),n.length||a("#menu-app").html(`
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>No se pudo cargar el menú</h2>
        <p>Verifica tu conexión e intenta nuevamente.</p>
        <button class="retry-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </div>`)}}a(()=>{Q(),a(document).on("keydown",e=>{e.ctrlKey&&e.shiftKey&&e.key.toUpperCase()==="R"&&(V(m.C_CARTAS,m.C_HOJAS),location.reload())})});window.hawkaMenu={reload:Q,clearCache:()=>V(m.C_CARTAS,m.C_HOJAS)};a(()=>{const e=s=>a(s).addClass("show").attr("aria-hidden","false"),n=s=>s.removeClass("show").attr("aria-hidden","true"),h=window.smile?.whatsReclamos||"51992472706";a(document).on("click","[data-foomodal]",s=>(s.preventDefault(),e(a(s.currentTarget).data("foomodal")))).on("click",".foo-close,.foomodal .foo-ok,.foomodal .foo-cancel",s=>n(a(s.currentTarget).closest(".foomodal"))).on("click",".foomodal",s=>{s.target===s.currentTarget&&n(a(s.currentTarget))}).on("submit","#reclamosForm",s=>{s.preventDefault();const l=new FormData(s.currentTarget),p=Object.fromEntries(l.entries());if(!p.nombres||!p.email||!p.detalle||!l.get("consent"))return x("Completa los campos obligatorios.","error");const b=`*Reclamo Hawka*
Nombre: ${p.nombres}
Email: ${p.email}
Teléfono: ${p.telefono||"-"}
Pedido: ${p.pedido||"-"}
Detalle: ${p.detalle}`;window.open(`https://wa.me/${h}?text=${encodeURIComponent(b)}`,"_blank"),da("Abriendo WhatsApp...","success",2200),s.currentTarget.reset(),n(a("#foo-recl"))}),a(".wty").text(new Date().getFullYear())});
