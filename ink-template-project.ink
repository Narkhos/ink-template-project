// Déclaration des fonctions externes que l'on retrouve dans main.js
EXTERNAL playSound(soundId)

LIST inventaire = epee, bouclier

VAR monstre = true

->Debut

=== function playSound(soundId) ===
// Usually external functions can only return placeholder
// results, otherwise they'd be defined in ink!
Playing Sound {soundId}

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
    // Appel de la fonction externe playSound(soundId)
    ~playSound("sword")
    ->choix
+ {inventaire !? bouclier}[Acheter un bouclier]
    ~inventaire += bouclier
    ~playSound("shield")
    ->choix
+[Partir affronter le monstre]
->CombatFinal

===CombatFinal

Vous faites face au monstre.

+ {inventaire ? epee} [Attaquer]
    Le monstre contre-attaque.
    {playSound("monster")}
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
    {playSound("monster")}
+ + {inventaire ? bouclier} [Bloquer]
    Votre bouclier est détruit.
    ~inventaire -=bouclier
    ->CombatFinal
+ + [Battre en retraite]
    ->Magasin
+ [Battre en retraite]
	->Magasin

