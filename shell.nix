{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Your packages here
    nodejs
  ];

  # Optional: Define the shell prompt with the current project directory
  shellHook = ''
  '';
}
