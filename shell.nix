let # whatever it works 
  pkgs = import <nixpkgs> { config = { allowUnfree = true; }; overlays = []; };
in # give me terminal access æ

pkgs.mkShellNoCC{
  packages = with pkgs; [
    ngrok
  ];

  shellHook = "ngrok http 5173";
  
} 