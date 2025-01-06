import { Button } from "@mui/material";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import axios from "axios";

const CsvDownloader = () => {
    const downloadCsv = async () :Promise<void>=>{
        try {
            const response = await axios.get("http://localhost:8080/api/carros/export-cars", {
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "carros.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.error("Erro ao baixar o arquivo CSV:", e)
        }
        
    }

    return (
        <>
            <Button sx={{mt: {xs:2, md:0}}} 
                variant="contained"
                onClick={downloadCsv}
                startIcon={<AddTwoToneIcon    fontSize="small" />}
                >

                Exportar Carros Para CSV
            </Button>
        
        </>
    );
}
export default CsvDownloader;