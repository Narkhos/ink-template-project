var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Debut"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Debut":["ev",1,"/ev",{"VAR=":"monstre","re":true},"ev",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"-",{"VAR=":"inventaire","re":true},"/ev","ev",{"VAR?":"inventaire"},{"VAR?":"epee"},"-",{"VAR=":"inventaire","re":true},"/ev","^L'aventure commence.","\n",{"->":"Magasin"},{"#f":1}],"Magasin":["^Vous entrez dans le magasin.","\n",{"->":".^.choix"},{"choix":[["ev","str","^Acheter une épée","/str",{"VAR?":"inventaire"},{"VAR?":"epee"},"!?","/ev",{"*":".^.c-0","flg":5},"ev","str","^Acheter un bouclier","/str",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"!?","/ev",{"*":".^.c-1","flg":5},"ev","str","^Partir affronter le monstre","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",{"VAR?":"inventaire"},{"VAR?":"epee"},"+",{"VAR=":"inventaire","re":true},"/ev",{"#":"SCRIPT: playSoundById('sword');"},{"->":".^.^.^"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"+",{"VAR=":"inventaire","re":true},"/ev",{"#":"SCRIPT: playSoundById('shield');"},{"->":".^.^.^"},{"#f":5}],"c-2":["\n",{"->":"CombatFinal"},{"#f":5}]}],{"#f":1}],"#f":1}],"CombatFinal":[["^Vous faites face au monstre.","\n","ev","str","^Attaquer","/str",{"VAR?":"inventaire"},{"VAR?":"epee"},"?","/ev",{"*":".^.c-0","flg":5},"ev","str","^Provoquer","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Battre en retraite","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Le monstre contre-attaque.","\n",{"#":"SCRIPT: playSoundById('monster');"},["ev","str","^Pointer l'épée vers sa tête","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Parer l'attaque","/str",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"?","/ev",{"*":".^.c-1","flg":5},"ev","str","^Battre en retraite","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",0,"/ev",{"VAR=":"monstre","re":true},"^Le monstre s'effondre. Vous êtes victorieux !","\n",["ev","str","^Recommencer","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"Debut"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Vous déviez l'attaque du monstre à l'aide de votre bouclier","\n",{"->":".^.^.^.^.^"},{"#f":5}],"c-2":["\n",{"->":"Magasin"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Le monstre vous charge.","\n",{"#":"SCRIPT: playSoundById('monster');"},["ev","str","^Bloquer","/str",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"?","/ev",{"*":".^.c-0","flg":5},"ev","str","^Battre en retraite","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Votre bouclier est détruit.","\n","ev",{"VAR?":"inventaire"},{"VAR?":"bouclier"},"-",{"VAR=":"inventaire","re":true},"/ev",{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["\n",{"->":"Magasin"},{"#f":5}]}],{"#f":5}],"c-2":["\n",{"->":"Magasin"},{"#f":5}]}],{"#f":1}],"global decl":["ev",{"list":{},"origins":["inventaire"]},{"VAR=":"inventaire"},1,{"VAR=":"monstre"},"/ev","end",null],"#f":1}],"listDefs":{"inventaire":{"epee":1,"bouclier":2}}};