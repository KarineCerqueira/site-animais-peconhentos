// dashboard/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/ui/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
          </CardHeader>
          <CardContent>Conteúdo do Card 1</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
          </CardHeader>
          <CardContent>Conteúdo do Card 2</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 3</CardTitle>
          </CardHeader>
          <CardContent>Conteúdo do Card 3</CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
