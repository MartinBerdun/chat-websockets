import  {fileURLToPath} from "url";
import { dirname } from "path";

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);

export default __dirname; // nos permite acceder a una ruta absoluta de un archivo