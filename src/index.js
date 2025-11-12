import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "../block.json";

import "./style.css"; // Esto apunta a src/style.css (Tailwind input)

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});