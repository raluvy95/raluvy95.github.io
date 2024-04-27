let
  pkgs = import <nixpkgs> { config = { allowUnfree = true; }; overlays = []; };
in

pkgs.mkShellNoCC{
  packages = with pkgs; [
    ngrok
  ];

  shellHook = "ngrok http 5173";

} 