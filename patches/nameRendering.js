import ModUtils, { insert } from "../modUtils.js"

// Name rendering patches - Display density of other players & Hide bot names features

export default (/** @type {ModUtils} */ { modifyCode, waitForMinification, matchCode, replaceOne }) => {

  const playerDataFieldNames = matchCode(`var playerCommitted = playerData.playerCommitted[playerID];
    var balanceText = formatter.one.two(playerData.playerBalance[playerID] - playerCommitted);`, {
    addToDictionary: ["playerData", "playerCommitted", "playerBalance"],
  })

  const { placeBalanceAbove } = matchCode(`aLT += Math.floor(0.78 * fontSize);
    if (placeBalanceAbove) {/*...*/}`)

  // Balance rendering; Renders density when the "Reverse Name/Balance" setting is off (default)
  modifyCode(
    `function aLY(ctx, i, fontSize, x, y, aLU) {
    var committedAttack = playerData.playerCommitted[i];
    var aLe = Util.s1.formatNumber(playerData.playerBalance[i] - committedAttack);
    ${insert(`function drawDensity() {
      if (!placeBalanceAbove && __fx.settings.showPlayerDensity) {
        __fx.settings.coloredDensity && (ctx.fillStyle = __fx.utils.textStyleBasedOnDensity(i));
        ctx.fillText(__fx.utils.getDensity(i), x, y + fontSize);
        const eliminationEstimate = __fx.settings.showEstimatedEliminationAttack
          ? __fx.utils.getEstimatedEliminationAttack(i)
          : "";
        eliminationEstimate && ctx.fillText(eliminationEstimate, x, y + 2 * fontSize);
      }
    }`)}
    if (committedAttack) {
      var eY = ctx.fillStyle;
      ctx.fillStyle = aLX(fontSize, 2 + aLU % 2);
      ctx.fillText(aLe, x, y);
      ctx.fillStyle = eY;
      ${insert(`drawDensity();`)}
      return;
    }
    if (((aLU >> 1) & 1)) {
      ctx.lineWidth = 0.05 * fontSize;
      ctx.strokeStyle = aLX(fontSize, aLU % 2);
      ctx.strokeText(aLe, x, y);
      ${insert(`drawDensity();`)}
      return;
    }
    if (aLU > 1) {
      ctx.lineWidth = 0.12 * fontSize;
      ctx.strokeStyle = aLX(fontSize, aLU);
      ctx.strokeText(aLe, x, y);
    }
    ctx.fillText(aLe, x, y);
    ${insert(`drawDensity();`)}
  }`,
    { dictionary: { playerData: playerDataFieldNames.playerData, playerCommitted: playerDataFieldNames.playerCommitted, playerBalance: playerDataFieldNames.playerBalance, placeBalanceAbove } },
  )

  waitForMinification(() => {
    // Name rendering; Renders density when the "Reverse Name/Balance" setting is on
    // also powers the feature for hiding bot names
    replaceOne(
      /(function \w+\((?<i>\w+),(?<fontSize>\w+),(?<x>\w+),(?<y>\w+),(?<canvas>\w+)\){)(\6\.fillText\((?<playerData>\w+)\.(?<playerNames>\w+)\[\2\],\4,\5\)),(\2<(?<game>\w+)\.(?<gHumans>\w+)&&2!==\8\.(?<playerStates>\w+)\[[^}]+)}/g,
      `$1 var ___id = $2;
        var showName = $<i> < $<game>.$<gHumans> || !__fx.settings.hideBotNames;
        var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack
            ? __fx.utils.getEstimatedEliminationAttack(___id)
            : "";
        if (showName) $7, $10;
        ${placeBalanceAbove} && __fx.settings.showPlayerDensity && (
            __fx.settings.coloredDensity && ($<canvas>.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
            $<canvas>.fillText(__fx.utils.getDensity(___id), $<x>, showName ? $<y> + $<fontSize> : $<y>),
            eliminationEstimate && $<canvas>.fillText(eliminationEstimate, $<x>, showName ? $<y> + 2 * $<fontSize> : $<y> + $<fontSize>)
        ); }`,
    )
  })
}
