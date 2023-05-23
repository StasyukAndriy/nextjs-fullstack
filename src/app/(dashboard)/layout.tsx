import GlassPane from "@/components/GlassPane";
import { ReactNode } from "react";
import '@/styles/global.css';
import Sidebar from "@/components/SideBar";
export default function DashboardRootLayout({children}:{children:ReactNode}){
   
    return (
     <html lang="en">
            
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">
                   {children}
                   <Sidebar></Sidebar>
                </GlassPane>
                <div id="modal"></div>
            </body>
     </html>
    )
}