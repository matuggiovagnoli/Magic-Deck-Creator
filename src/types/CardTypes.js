export var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
export var ColorIdentity;
(function (ColorIdentity) {
    ColorIdentity[ColorIdentity["W"] = 0] = "W";
    ColorIdentity[ColorIdentity["U"] = 1] = "U";
    ColorIdentity[ColorIdentity["B"] = 2] = "B";
    ColorIdentity[ColorIdentity["R"] = 3] = "R";
    ColorIdentity[ColorIdentity["G"] = 4] = "G";
})(ColorIdentity || (ColorIdentity = {}));
export var Rarity;
(function (Rarity) {
    Rarity[Rarity["Basic Land"] = 0] = "Basic Land";
    Rarity[Rarity["Common"] = 1] = "Common";
    Rarity[Rarity["Uncommon"] = 2] = "Uncommon";
    Rarity[Rarity["Mythic Rare"] = 3] = "Mythic Rare";
    Rarity[Rarity["Timeshifted"] = 4] = "Timeshifted";
    Rarity[Rarity["Masterpiece"] = 5] = "Masterpiece";
})(Rarity || (Rarity = {}));
export var Layout;
(function (Layout) {
    Layout[Layout["normal"] = 0] = "normal";
    Layout[Layout["split"] = 1] = "split";
    Layout[Layout["flip"] = 2] = "flip";
    Layout[Layout["double-faced"] = 3] = "double-faced";
    Layout[Layout["token"] = 4] = "token";
    Layout[Layout["plane"] = 5] = "plane";
    Layout[Layout["scheme"] = 6] = "scheme";
    Layout[Layout["phenomenon"] = 7] = "phenomenon";
    Layout[Layout["leveler"] = 8] = "leveler";
    Layout[Layout["vanguard"] = 9] = "vanguard";
})(Layout || (Layout = {}));
export var Legality;
(function (Legality) {
    Legality[Legality["Legal"] = 0] = "Legal";
    Legality[Legality["Banned"] = 1] = "Banned";
    Legality[Legality["Restricted"] = 2] = "Restricted";
})(Legality || (Legality = {}));
