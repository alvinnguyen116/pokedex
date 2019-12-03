(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{163:function(e,t,a){},222:function(e,t,a){e.exports=a(418)},313:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(24),l=a(25),s=a(26),r=a(27),i=a(28),c=a(0),o=a.n(c),m=a(41),u=a.n(m),p=a(60),d=a(423),v=new(a(227));function f(e,t){return(e=e.toUpperCase())<(t=t.toUpperCase())?-1:e===t?0:1}function E(e,t){for(e=e.toString(10);e.length<3;)e="0"+e;return"#"+e}var h={green:0,red:1,blue:2,yellow:3,gold:6,silver:7,crystal:8,ruby:9,sapphire:10,leafgreen:11,firered:12,emerald:13,diamond:14,pearl:15,platinum:16,heartgold:17,soulsilver:18,black:19,white:20,"black 2":21,"white 2":22,x:23,y:24,"x & y":24,"omega ruby":25,"alpha sapphire":26,sun:27,moon:28,"ultra sun":29,"ultra moon":30,"let's go, pikachu!":31,"let's go, eevee!":32};new Map([["red","blue"],["gold","silver"],["ruby","sapphire"],["firered","leafgreen"],["diamond","pearl"],["heartgold","soulSilver"],["black","white"],["black-2","white-2"],["x","y"],["omega-ruby","alpha-sapphire"],["sun","Moon"],["ultra-sun","ultra-moon"],["sword","shield"],["let's-go,-pikachu!","let's-go,-eevee!"]]);function g(e,t){var a=Math.pow(10,t);return Math.round(e*a)/a}function N(e){var t=Object(c.useRef)(null);return function(e,t){function a(a){e.current&&!e.current.contains(a.target)&&t()}Object(c.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}))}(t,e.callback),o.a.createElement("div",{ref:t},e.children)}function b(e,t){var a=new XMLHttpRequest;a.addEventListener("load",(function(){t(JSON.parse(a.responseText))})),a.open("GET",e),a.send()}var k=new Map([["double_damage_from",{num:2,isTaken:!0}],["double_damage_to",{num:2,isTaken:!1}],["half_damage_from",{num:.5,isTaken:!0}],["half_damage_to",{num:.5,isTaken:!1}],["no_damage_from",{num:0,isTaken:!0}],["no_damage_to",{num:0,isTaken:!1}]]),y=a(424),x=a(425),_=(a(163),a(313),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).updateLocationEncounters=function(){b(a.props.pokemon.location_area_encounters,(function(e){a.setState({locationEncounters:e})}))},a.updateSpecies=function(){b(a.props.pokemon.species.url,(function(e){a.setState({species:e}),b(e.evolution_chain.url,(function(e){for(var t=[e.chain],n=[];t.length;){var l=t.shift();n.push(l.species.name),l.evolves_to.forEach((function(e){return t.push(e)}))}for(var s=function(e){v.getPokemonByName(n[e],(function(t,n){if(n)console.error(n);else{var l=a.state.evolutionMap.slice();l.push([e,t]),a.setState({evolutionMap:l})}}))},r=0;r<n.length;r++)s(r)}))}))},a.updateAbilities=function(){a.props.pokemon.abilities.forEach((function(e){b(e.ability.url,(function(e){var t=a.state.abilities.slice();t.push(e),a.setState({abilities:t})}))}))},a.updateHeldItems=function(){a.props.pokemon.held_items.forEach((function(e){b(e.item.url,(function(e){var t=a.state.heldItems.slice();t.push(e),a.setState({heldItems:t})}))}))},a.updateMoves=function(){console.log(a.props.pokemon.moves),a.props.pokemon.moves.forEach((function(e){b(e.move.url,(function(e){var t=a.state.moves.slice();t.push(e),a.setState({moves:t})}))}))},a.updateTypes=function(){a.props.pokemon.types.forEach((function(e){b(e.type.url,(function(e){var t=a.state.types.slice();t.push(e),a.setState({types:t})}))}))},a.updateAll=function(){a.updateLocationEncounters(),a.updateSpecies(),a.updateAbilities(),a.updateHeldItems(),a.updateMoves(),a.updateTypes()},a.AbilitiesElement=function(){return a.state.abilities&&a.state.abilities.length?o.a.createElement("div",{className:"pokemon-container flex-column"},o.a.createElement("div",{className:"bold"},"Abilities"),o.a.createElement("div",{className:"abilities flex"},a.state.abilities.map((function(e){var t,n=a.props.pokemon.abilities.find((function(t){return t.ability.name===e.name})),l="";return n&&n.is_hidden&&(l=" (Hidden)"),e.effect_entries.length&&(t=o.a.createElement("div",{className:"text-align-center"},e.effect_entries[0].effect)),o.a.createElement(y.a,{trigger:o.a.createElement("button",null,e.name+l),key:e.name},o.a.createElement(y.a.Content,null,o.a.createElement(y.a.Description,null,t)))})))):null},a.BaseExpElement=function(){return o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Base EXP"),o.a.createElement("div",null,a.state.pokemon.base_experience+" EXP"))},a.HeightElement=function(){var e=10*a.state.pokemon.height/30.48;return o.a.createElement("div",{className:"pokemon-container height"},o.a.createElement("div",{className:"label"},"Height"),o.a.createElement("div",{style:{textTransform:"lowercase"}},g(e,2)+" ft"))},a.BaseHappinessElement=function(){return a.state.species?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Base Happiness"),o.a.createElement("div",null,a.state.species.base_happiness," / 255")):null},a.CaptureRateElement=function(){return a.state.species?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Capture Rate"),o.a.createElement("div",null,a.state.species.capture_rate," / 255")):null},a.GenerationElement=function(){return a.state.species?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Generation"),o.a.createElement("div",{style:{textTransform:"uppercase"}},a.state.species.generation.name.split("-")[1])):null},a.GrowthElement=function(){return a.state.species?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Growth Rate"),o.a.createElement("div",null,a.state.species.growth_rate.name)):null},a.HabitatElement=function(){return a.state.species&&a.state.species.habitat&&a.state.species.habitat.name?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Habitat"),o.a.createElement("div",null,a.state.species.habitat.name)):null},a.HatchElement=function(){return a.state.species?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Hatch Counter"),o.a.createElement("div",null,Number(255*(a.state.species.hatch_counter+1)).toLocaleString()," Steps")):null},a.NameElement=function(){return a.state.species?o.a.createElement("div",{className:"name-container"},o.a.createElement("div",{className:"label"},a.state.pokemon.name),o.a.createElement("div",{className:"id"},E(a.state.species.id))):null},a.MovesElement=function(e){var t,a,n;return e.effect_entries.length&&(t=e.effect_entries[0].effect),e.accuracy&&(a=o.a.createElement("div",{className:"flex"},o.a.createElement("div",null,"Accuracy"),o.a.createElement("div",null,e.accuracy))),e.power&&(n=o.a.createElement("div",{className:"flex"},o.a.createElement("div",null,"Power"),o.a.createElement("div",null,e.power))),o.a.createElement(y.a,{trigger:o.a.createElement("button",{className:"move-button"},e.name),key:e.name},o.a.createElement(y.a.Content,null,o.a.createElement(y.a.Description,null,o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"flex-column description-box"},a,o.a.createElement("div",{className:"flex"},o.a.createElement("div",null,"Type"),o.a.createElement("div",null,e.type.name)),n,o.a.createElement("div",{className:"flex"},o.a.createElement("div",null,"pp"),o.a.createElement("div",null,e.pp))),o.a.createElement("div",{className:"description-effect"},t)))))},a.SpritesElement=function(){var e=Object.entries(a.state.pokemon.sprites).filter((function(e){var t=Object(p.a)(e,2);t[0];return null!=t[1]}));return e.sort((function(e,t){return f(e[0],t[0])})),0===e.length?null:o.a.createElement("div",{className:"pokemon-container flex sprites-element"},e.map((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"flex-column",key:a},o.a.createElement("img",{src:n,alt:a}))})))},a.StatsElement=function(){var e=a.state.pokemon.stats;return e.sort((function(e,t){return f(e.stat.name,t.stat.name)})),o.a.createElement("div",{className:"pokemon-container flex-column"},o.a.createElement("table",{className:"stat"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Stat"),o.a.createElement("th",null,"Base"),o.a.createElement("th",null,"EV"))),o.a.createElement("tbody",null,e.map((function(e){return o.a.createElement("tr",{key:e.stat.name},o.a.createElement("td",null,e.stat.name),o.a.createElement("td",null,e.base_stat),o.a.createElement("td",null,e.effort))})))))},a.TypesElement=function(){var e=a.state.pokemon.types.map((function(e){return e.type.name}));return e.sort(),o.a.createElement("div",{className:"type-container"},o.a.createElement("div",{className:"flex types"},e.map((function(e){return o.a.createElement("button",{key:e,className:"cancel "+e},e)}))))},a.WeightElement=function(){return o.a.createElement("div",{className:"pokemon-container weight"},o.a.createElement("div",{className:"label"},"Weight"),o.a.createElement("div",{style:{textTransform:"lowercase"}},g(a.state.pokemon.weight/4.536,2)+" lbs"))},a.HeldItemsElement=function(){if(!a.state.heldItems.length)return null;var e=a.state.heldItems;return e.sort((function(e,t){return f(e.name,t.name)})),o.a.createElement("div",{className:"pokemon-container flex-column special"},o.a.createElement("div",{className:"bold"},"Held Items (Wild)"),o.a.createElement("div",{className:"flex held-items"},e.map((function(e){var t,a;return e.effect_entries.length&&(t=e.effect_entries[0].effect),e.sprites&&e.sprites.default&&(a=e.sprites.default),o.a.createElement(y.a,{trigger:o.a.createElement("button",null,e.name),key:e.name},o.a.createElement(y.a.Content,null,o.a.createElement(y.a.Description,null,o.a.createElement("div",{className:"flex"},o.a.createElement("img",{src:a,alt:e.name}),o.a.createElement("div",{className:"held-effect"},t)))))}))))},a.TabsElement=function(){if(!a.state.species||!a.state.species.flavor_text_entries||!a.state.species.flavor_text_entries.length||!a.state.locationEncounters.length||a.state.moves.length!==a.state.pokemon.moves.length)return null;var e=new Map(a.state.species.flavor_text_entries.filter((function(e){return"en"===e.language.name})).map((function(e){return[e.version.name.replace(/-/g," "),e.flavor_text.replace("\f"," ")]}))),t=new Map;a.state.locationEncounters.forEach((function(e){var a=e.location_area.name;e.version_details.forEach((function(e){var n=e.version.name.replace(/-/g," ");t.has(n)?t.get(n).push({version:e,location:a}):t.set(n,[{version:e,location:a}])}))}));var n=new Map;a.props.pokemon.moves.forEach((function(e){var t=e.move.name;e.version_group_details.forEach((function(e){var a;("ultra-sun-ultra-moon"===(a=(a=e.version_group.name).toLowerCase())?["ultra sun","ulra moon"]:"black-2-white-2"===a?["black 2","white 2"]:"let's-go,-pikachu!-let's-go,-eevee!"===a?["let's go, pikachu!","let's go, eevee!"]:a.split("-")).forEach((function(a){n.has(a)?n.get(a).push({detail:e,name:t}):n.set(a,[{detail:e,name:t}])}))}))}));var l=Object.keys(h).filter((function(a){return e.has(a)||t.has(a)})).map((function(l){return{menuItem:l,render:function(){var s,r,i;return e.has(l)&&(s=o.a.createElement("div",{className:"flex-column pokedex-entry"},o.a.createElement("div",{className:"title"},"Pok\xe9dex Entry"),o.a.createElement("div",{className:"entry"},e.get(l)))),t.has(l)&&(r=a.LocationElement(t.get(l))),n.has(l)&&(i=a.TabMovesElement(n.get(l))),o.a.createElement(x.a.Pane,null,s,r,i)}}}));return o.a.createElement("div",{className:"flex-column tabs-element"},o.a.createElement("div",{className:"pokemon-games"},"Generations"),o.a.createElement(x.a,{className:"tabs",menu:{fluid:!1,vertical:!1,tabular:!1},panes:l}))},a.TabMovesElement=function(e){var t=new Map;return e.forEach((function(e){var a=e.detail.move_learn_method.name;t.has(a)&&!t.get(a).map((function(e){return e.name})).includes(e.name)?t.get(a).push(e):t.set(a,[e])})),t.get("machine").sort((function(e,t){return f(e.name,t.name)})),t.get("level-up").sort((function(e,t){return e.detail.level_learned_at-t.detail.level_learned_at})),o.a.createElement("div",{className:"flex tab-moves-element"},o.a.createElement("div",{className:"flex-column"},o.a.createElement("div",{className:"title"},"Level Up Moves"),o.a.createElement("div",{className:"flex-column tab-moves"},t.get("level-up").map((function(e){var t=a.state.moves.find((function(t){return t.name===e.name}));return a.MovesByLevelUpElement(t,e.detail.level_learned_at)})))),o.a.createElement("div",{className:"flex-column"},o.a.createElement("div",{className:"title"},"Machine Moves"),o.a.createElement("div",{className:"flex tab-moves"},t.get("machine").map((function(e){var t=a.state.moves.find((function(t){return t.name===e.name}));return a.MovesElement(t)})))))},a.MovesByLevelUpElement=function(e,t){return o.a.createElement("div",{className:"flex detail",key:e.name},o.a.createElement("div",{className:"detail-level"},t),a.MovesElement(e))},a.LocationElement=function(e){return o.a.createElement("div",{className:"flex-column special-locations"},o.a.createElement("div",{className:"habitat"},"Habitat"),o.a.createElement("div",{className:"flex region-container"},e.map((function(e){var t=e.location,a=e.version;return o.a.createElement("div",{className:"flex-column location",key:t},o.a.createElement("div",{className:"region-name label"},t.replace(/-/g," ")),o.a.createElement("div",{className:"flex encounters"},a.encounter_details.map((function(e,t){var a;e.condition_values.length&&(a=o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Condition"),o.a.createElement("div",null,e.condition_values.map((function(e){return e.name})).join(", ").replace(/-/g," "))));var n=o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Level"),o.a.createElement("div",null,e.max_level));return e.max_level!==e.min_level&&(n=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Max LVL"),o.a.createElement("div",null,e.max_level)),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Min LVL"),o.a.createElement("div",null,e.min_level)))),o.a.createElement("div",{className:"encounter",key:t},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Method"),o.a.createElement("div",null,e.method.name.replace(/-/g," "))),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Chance"),o.a.createElement("div",null,e.chance,"%")),n,a)}))))}))))},a.EvolutionElement=function(){if(!a.state.evolutionMap.length)return null;var e=a.state.evolutionMap.sort((function(e,t){return e[0]-t[0]})).map((function(e){var t=Object(p.a)(e,2);t[0];return t[1]}));return o.a.createElement("div",{className:"flex-column evolution-chain"},o.a.createElement("div",{className:"label"},"Evolution Chain"),o.a.createElement("div",{className:"flex pokemon-evolutions"},e.map((function(e){for(var t=e.id.toString(10),n=0;n<3-t.length;n++)t="0"+t;return t="#"+t,o.a.createElement("div",{className:"flex-column pokemon",key:e.id,onClick:function(){return a.props.onSelection(e.name)}},o.a.createElement("img",{src:e.sprites.front_default,alt:e.name}),o.a.createElement("div",{className:"id"},t),o.a.createElement("div",{className:"name"},e.name),o.a.createElement("div",{className:"flex button-container"},e.types.map((function(e){var t=e.type.name;return o.a.createElement("button",{className:"cancel "+t,key:t},t)}))))}))))},a.EggGroupElement=function(){return a.state.species&&a.state.species.egg_groups&&a.state.species.egg_groups.length?o.a.createElement("div",{className:"pokemon-container"},o.a.createElement("div",{className:"label"},"Egg Groups"),o.a.createElement("div",null,a.state.species.egg_groups.map((function(e){return e.name.replace(/-/g," ")})).join(", "))):null},a.GenderRateElement=function(){if(!a.state.species)return null;var e=a.state.species.gender_rate;if(e||(e=0),e<0)e=o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Genderless"));else{var t=g(e/8*100,2),n=100-t;e=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Male"),o.a.createElement("div",null,n,"%")),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"label"},"Female"),o.a.createElement("div",null,t,"%")))}return o.a.createElement("div",{className:"pokemon-container gender-rate"},o.a.createElement("div",{className:"flex-column"},e))},a.DmgElement=function(){if(!a.state.types.length||a.state.types.length!==a.props.pokemon.types.length)return null;var e=new Map([["normal",1],["fire",1],["fighting",1],["water",1],["flying",1],["grass",1],["poison",1],["electric",1],["ground",1],["psychic",1],["rock",1],["ice",1],["bug",1],["dragon",1],["ghost",1],["dark",1],["steel",1],["fairy",1]]);return a.state.types.forEach((function(t){Object.keys(t.damage_relations).forEach((function(a){var n=k.get(a);n&&t.damage_relations[a].forEach((function(t){var a=t.name;e.has(a)&&n.isTaken&&e.set(a,e.get(a)*n.num)}))}))})),o.a.createElement("div",{className:"flex-column dmg-component"},o.a.createElement("div",{className:"dmg-title"},"Damage Taken"),o.a.createElement("div",{className:"dmg-element flex"},Array.from(e).map((function(t){var a=Object(p.a)(t,2),n=a[0];a[1];return o.a.createElement("div",{className:"dmg-type flex-column "+n,key:n},o.a.createElement("div",{className:"vertical-text"},n),o.a.createElement("div",{className:"multiplier"},"x",e.get(n)))}))))},a.state={pokemon:e.pokemon,error:!1,initializing:!1,locationEncounters:[],species:null,abilities:[],heldItems:[],evolutionMap:[],types:[],moves:[]},a.updateAll(),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.pokemon?this.state.pokemon&&this.state.initializing?o.a.createElement("div",{className:"loader-container"},o.a.createElement(d.a,{active:!0,inline:"centered"},"Loading")):o.a.createElement("div",{className:"pokemon-layout flex-column"},o.a.createElement("div",{className:"flex top-container"},o.a.createElement("div",{className:"basic-info"},this.NameElement(),this.TypesElement(),this.HeightElement(),this.WeightElement(),this.GenderRateElement()),this.SpritesElement()),o.a.createElement("div",{className:"flex metadata"},this.StatsElement(),o.a.createElement("div",{className:"ability-move flex-column"},o.a.createElement("div",{className:"flex dialogs"},this.AbilitiesElement(),this.HeldItemsElement())),o.a.createElement("div",{className:"metadata-2"},this.BaseExpElement(),this.BaseHappinessElement(),this.CaptureRateElement(),this.EggGroupElement(),this.GenerationElement(),this.GrowthElement(),this.HabitatElement(),this.HatchElement())),this.EvolutionElement(),this.DmgElement(),this.TabsElement()):null}},{key:"componentDidUpdate",value:function(e){e.pokemon.id!==this.props.pokemon.id&&this.updateAll()}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.pokemon.id!==t.pokemon.id?{pokemon:e.pokemon,error:!1,initializing:!1,locationEncounters:[],species:null,abilities:[],heldItems:[],moves:[],evolutionMap:[],types:[]}:null}}]),t}(o.a.Component)),w=a(51),O=(a(415),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).filter=function(e,t){return t=t.map((function(e,t){return{name:e,id:E(t+1)}})),isNaN(e)?t.filter((function(t){return t.name.toUpperCase().slice(0,e.length)===e.toUpperCase()})):t.filter((function(t){return t.id.includes(e.toString(10))}))},a.handleChange=function(e){a.setState({showOptions:!0,currentOptionIndex:0}),a.props.onInputValue(e.target.value)},a.handleClick=function(e){a.props.onSelection(e),a.setState({showOptions:!1,currentOptionIndex:0}),a.props.onInputValue(e)},a.handleKeyPress=function(e){if(e.persist(),"Enter"===e.key){var t=a.filter(a.state.input.trim(),a.props.options)[a.state.currentOptionIndex].name;a.setState({showOptions:!1,currentOptionIndex:0}),a.props.onInputValue(t),a.props.onSelection(t)}},a.handleKeyDown=function(e){var t=a.filter(a.state.input,a.props.options),n=t.length,l=a.state.currentOptionIndex;if("ArrowDown"===e.key){if(l===n-1)return;l++}else if("ArrowUp"===e.key){if(0===l)return;l--}l<t.length&&a.setState({currentOptionIndex:l,showOptions:!0,placeHolder:t[l].name})},a.handleKeyUp=function(e){var t=document.getElementById("options");if(["ArrowDown","ArrowUp"].includes(e.key)&&t){var n=39*a.state.currentOptionIndex;(n<t.scrollTop||n>t.scrollTop+117)&&(t.scrollTop=n)}var l=a.filter(a.state.input,a.props.options);"Backspace"===e.key&&t&&(t.scrollTop=0,a.setState({currentOptionIndex:0,placeHolder:l[0].name}))},a.OptionsElement=function(){var e=a.filter(a.state.input,a.props.options);return 0===e.length?null:o.a.createElement("div",{className:"options-container absolute"},o.a.createElement("div",{className:"options",id:"options"},e.map((function(e,t){var n="";return t===a.state.currentOptionIndex&&(n="selected"),o.a.createElement("div",{className:"option",id:n,onClick:function(){return a.handleClick(e.name)},key:e.name},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"dropdown-id"},e.id),o.a.createElement("div",{className:"dropdown-name"},e.name)))}))))},a.state={input:e.input,showOptions:!1,currentOptionIndex:0,placeHolder:e.placeHolder},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;this.state.showOptions&&(e=this.OptionsElement());var a={borderRadius:this.state.showOptions&&e?"8px 8px 0 0":"8px",borderColor:this.state.showOptions?"#9ec0ff":"#80808061"};return o.a.createElement(N,{callback:function(){return t.setState({showOptions:!1})}},o.a.createElement("div",{className:"dropdown relative",style:a},o.a.createElement(w.a,{className:"search",name:"search"}),o.a.createElement("input",{placeholder:this.state.placeHolder,spellCheck:"false",value:this.state.input||"",onClick:function(){return t.setState({showOptions:!0})},onChange:this.handleChange,onKeyPress:this.handleKeyPress,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}),e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{input:e.input}:t}}]),t}(o.a.Component)),S=(a(416),a(417),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).handleSelection=function(e){v.getPokemonByName(e,(function(e,t){t?console.error(t):a.setState({currentPokemon:e,inputValue:e.name})}))},a.handleInputValue=function(e){a.setState({inputValue:e})},a.state={pokemons:[],types:[],currentPokemon:null,inputValue:""},v.getPokemonsList().then((function(e){return a.setState({pokemons:e.results})})),v.getTypesList().then((function(e){return a.setState({types:e.results})})),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.currentPokemon&&(e=o.a.createElement(_,{pokemon:this.state.currentPokemon,onSelection:this.handleSelection})),o.a.createElement("div",{className:"index flex-column"},o.a.createElement(O,{placeHolder:"Search Pokemon",input:this.state.inputValue,onSelection:this.handleSelection,onInputValue:this.handleInputValue,options:this.state.pokemons.map((function(e){return e.name}))}),e)}}]),t}(o.a.Component));u.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.74ba903c.chunk.js.map