eval("var old_updateBalanceStacks = " + updateBalanceStacks.toString());
function updateBalanceStacks()
{
  old_updateBalanceStacks()
  if(game.challenges.Balance.balanceStacks > 90 && !(game.global.mapsActive || game.global.preMapsActive))
  {
    mapsClicked();
  }
}

/* this will automatically go to the maps screen if you are in the world and your balance stacks gets dangerously high during the balance challenge

just paste this into your javascript console (never paste anything into your javascript console unless you trust the source)*/
