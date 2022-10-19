figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case "randomize-values": {
      const { min, max, precision } = msg;

      const selection = figma.currentPage.selection;
      console.log(selection);

      const textNodes: TextNode[] = selection.filter(
        (elem) => elem.type === "TEXT"
      ) as TextNode[];

      await figma.loadFontAsync({
        family: "Indie Flower",
        style: "Regular",
      });

      textNodes.forEach((elem) => {
        console.log(elem.characters);
        const newVal = Math.random() * (max - min) + min;
        elem.characters = newVal.toFixed(precision);
      });
      return;
    }
    case "close": {
      figma.closePlugin();
      return;
    }
  }
};
