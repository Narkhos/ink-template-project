LIST inventaire = epee, bouclier

VAR monstre = true

->Debut

===Debut
// Modifier une variable dans ink déclenche l'appel de la fonction callback correspondante
// définie dans main.js via la méthode story.BindExternalFunction()
~monstre = true
~inventaire -= bouclier
~inventaire -= epee

L'aventure commence.
->Magasin

=== Magasin
Vous entrez dans le magasin.
->choix
=choix

+ {inventaire !? epee}[Acheter une épée]
    ~inventaire += epee
    // Appel de la fonction javascript playSoundById(soundId)
    # SCRIPT: playSoundById('sword');
    ->choix
+ {inventaire !? bouclier}[Acheter un bouclier]
    ~inventaire += bouclier
    # SCRIPT: playSoundById('shield');
    ->choix
+[Partir affronter le monstre]
->CombatFinal

===CombatFinal

Vous faites face au monstre.

+ {inventaire ? epee} [Attaquer]
    Le monstre contre-attaque.
    # SCRIPT: playSoundById('monster');
+ + [Pointer l'épée vers sa tête]
	    ~ monstre = false
	    Le monstre s'effondre. Vous êtes victorieux !
+ + + [Recommencer]
	    ->Debut
+ + {inventaire ? bouclier} [Parer l'attaque]
    Vous déviez l'attaque du monstre à l'aide de votre bouclier
    ->CombatFinal
+ + [Battre en retraite]
	->Magasin
+ [Provoquer]
    Le monstre vous charge.
    # SCRIPT: playSoundById('monster');
+ + {inventaire ? bouclier} [Bloquer]
    Votre bouclier est détruit.
    ~inventaire -=bouclier
    ->CombatFinal
+ + [Battre en retraite]
    ->Magasin
+ [Battre en retraite]
	->Magasin

