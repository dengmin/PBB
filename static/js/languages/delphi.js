hljs.LANGUAGES.delphi=function(){var a={and:1,safecall:1,cdecl:1,then:1,string:1,exports:1,library:1,not:1,pascal:1,set:1,virtual:1,file:1,"in":1,array:1,label:1,packed:1,"end.":1,index:1,"while":1,"const":1,raise:1,"for":1,to:1,implementation:1,"with":1,except:1,overload:1,destructor:1,downto:1,"finally":1,program:1,exit:1,unit:1,inherited:1,override:1,"if":1,type:1,until:1,"function":1,"do":1,begin:1,repeat:1,"goto":1,nil:1,far:1,initialization:1,object:1,"else":1,"var":1,uses:1,external:1,resourcestring:1,"interface":1,end:1,finalization:1,"class":1,asm:1,mod:1,"case":1,on:1,shr:1,shl:1,of:1,register:1,xorwrite:1,threadvar:1,"try":1,record:1,near:1,stored:1,constructor:1,stdcall:1,inline:1,div:1,out:1,or:1,procedure:1},b={safecall:1,stdcall:1,pascal:1,stored:1,"const":1,implementation:1,finalization:1,except:1,to:1,"finally":1,program:1,inherited:1,override:1,then:1,exports:1,string:1,read:1,not:1,mod:1,shr:1,"try":1,div:1,shl:1,set:1,library:1,message:1,packed:1,index:1,"for":1,near:1,overload:1,label:1,downto:1,exit:1,"public":1,"goto":1,"interface":1,asm:1,on:1,of:1,constructor:1,or:1,"private":1,array:1,unit:1,raise:1,destructor:1,"var":1,type:1,until:1,"function":1,"else":1,external:1,"with":1,"case":1,"default":1,record:1,"while":1,"protected":1,property:1,procedure:1,published:1,and:1,cdecl:1,"do":1,threadvar:1,file:1,"in":1,"if":1,end:1,virtual:1,write:1,far:1,out:1,begin:1,repeat:1,nil:1,initialization:1,object:1,uses:1,resourcestring:1,"class":1,register:1,xorwrite:1,inline:1,"static":1},c={className:"comment",begin:"{",end:"}",relevance:0},d={className:"comment",begin:"\\(\\*",end:"\\*\\)",relevance:10},e={className:"string",begin:"'",end:"'",contains:[{begin:"''"}],relevance:0},f={className:"string",begin:"(#\\d+)+"},g={className:"function",begin:"(procedure|constructor|destructor|function)\\b",end:"[:;]",keywords:{"function":1,constructor:10,destructor:10,procedure:10},contains:[{className:"title",begin:hljs.IDENT_RE},{className:"params",begin:"\\(",end:"\\)",keywords:a,contains:[e,f]},c,d]};return{case_insensitive:!0,defaultMode:{keywords:a,illegal:'("|\\$[G-Zg-z]|\\/\\*|</)',contains:[c,d,hljs.C_LINE_COMMENT_MODE,e,f,hljs.NUMBER_MODE,g,{className:"class",begin:"=\\bclass\\b",end:"end;",keywords:b,contains:[e,f,c,d,g]}]},modes:[]}}();