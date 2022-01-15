"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[288],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8619:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_label:"Generators Config",title:"Generators Configuration",sidebar_position:3.4},l=void 0,u={unversionedId:"BedWars1058/configuration/generators-configuration",id:"BedWars1058/configuration/generators-configuration",title:"Generators Configuration",description:"Explanation",source:"@site/docs/BedWars1058/configuration/generators-configuration.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/generators-configuration",permalink:"/docs/BedWars1058/configuration/generators-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BedWars1058/configuration/generators-configuration.md",tags:[],version:"current",sidebarPosition:3.4,frontMatter:{sidebar_label:"Generators Config",title:"Generators Configuration",sidebar_position:3.4},sidebar:"tutorialSidebar",previous:{title:"Arena Config",permalink:"/docs/BedWars1058/configuration/Arena-Configuration"},next:{title:"Shop Config",permalink:"/docs/BedWars1058/configuration/shop"}},d=[{value:"Explanation",id:"explanation",children:[],level:3},{value:"Custom generators per Arena Group",id:"custom-generators-per-arena-group",children:[],level:3}],p={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"explanation"},"Explanation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Under the \"Default\" configuration section there is the configuration for all the arena groups\n#without a specified configuration. If you don't know what an arena group is you should read\n#about them here: https://gitlab.com/andrei1058/BedWars1058/wikis/arena-groups\nDefault:\n  #This contains the default settings for the iron generator on a team base\n  #A player can change those values for his team buying upgrades\n  #from the team upgrades NPC\n  iron:\n    #This is the iron-spawn delay in seconds\n    delay: 2\n    #How many iron ingots to spawn at once\n    amount: 2\n    #If the amount of iron ingots spawned on your generator\n    #is equal to this, it won't spawn items anymore until\n    #you collect the dropped items.\n    spawn-limit: 32\n\n  #This contains the settings for the gold generator on a team base\n  #A player can change those values for his team buying upgrades\n  #from the team upgrades NPC\n  gold:\n    #This is the gold-spawn delay in seconds\n    delay: 6\n    #How many gold ingots to spawn at once\n    amount: 2\n    #If the amount of gold ingots spawned on your generator\n    #is equal to this, it won't spawn items anymore until\n    #you collect the dropped items.\n    spawn-limit: 7\n\n  #This contains the settings for the diamond generators on a map\n  diamond:\n    #Settings for tier I\n    tierI:\n      #This is the diamond-spawn delay in seconds\n      delay: 30\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items\n      spawn-limit: 4\n\n    #Settings for tier II\n    tierII:\n      #This is the diamond-spawn delay in seconds\n      delay: 20\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 6\n      #When to upgrade diamond generators tier\n      #Time in seconds\n      #Upgrade after 360 seconds since the game start\n      start: 360\n\n    #Settings for tier III\n    tierIII:\n      #This is the diamond-spawn delay in seconds\n      delay: 15\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 8\n      #When to upgrade diamond generators tier\n      #Time in seconds\n      #Upgrade after 1080 seconds since tier II upgrade\n      start: 1080\n  emerald:\n    #Settings for tier I\n    tierI:\n      #This is the emerald-spawn delay in seconds\n      delay: 70\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 4\n\n    #Settings for tier II\n    tierII:\n      #This is the emerald-spawn delay in seconds\n      delay: 50\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 6\n      #When to upgrade emerald generators tier\n      #Time in seconds\n      #Upgrade after 720 seconds since the game start\n      start: 720\n\n    #Settings for tier III\n    tierIII:\n      #This is the emerald-spawn delay in seconds\n      delay: 30\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 8\n      #When to upgrade emerald generators tier\n      #Time in seconds\n      #Upgrade after 1440 seconds since tier II upgrade\n      start: 1440\n\n#Set this to true if you want to stack\n#the dropped items from generators\nstack-items: false\n")),(0,o.kt)("h3",{id:"custom-generators-per-arena-group"},"Custom generators per Arena Group"),(0,o.kt)("p",null,"If you don't know what is an arena group read about it ",(0,o.kt)("a",{parentName:"p",href:"arena-groups"},"here"),"."),(0,o.kt)("p",null,"Creating custom configuration it's really easy. Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Default")," configuration path, paste it and rename ",(0,o.kt)("inlineCode",{parentName:"p"},"Default")," to your desired arena group. We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"4v4v4v4")," as example. You can now change those configuration values for your ",(0,o.kt)("inlineCode",{parentName:"p"},"4v4v4v4")," arenas."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"4v4v4v4:\n  iron:\n    delay: 2\n    amount: 2\n    spawn-limit: 32\n  gold:\n    delay: 6\n    amount: 2\n    spawn-limit: 7\n  diamond:\n    tierI:\n      delay: 30\n      spawn-limit: 4\n    tierII:\n      delay: 20\n      spawn-limit: 6\n      start: 360\n    tierIII:\n      delay: 15\n      spawn-limit: 8\n      start: 1080\n  emerald:\n    tierI:\n      delay: 70\n      spawn-limit: 4\n    tierII:\n      delay: 50\n      spawn-limit: 6\n      start: 720\n    tierIII:\n      delay: 30\n      spawn-limit: 8\n      start: 1440\n")))}c.isMDXComponent=!0}}]);