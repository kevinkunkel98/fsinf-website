{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Your packages here
    nodejs
    treefmt
    nixfmt-rfc-style
    nodePackages.prettier
  ];
}
