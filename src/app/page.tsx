"use client";
import { tsr } from "@/lib";
import AdvocatesTable from "./advocates-table";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { data, isPending, isError, error } = tsr.getAdvocates.useQuery({
    queryKey: ["advocates"] as const,
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const searchTerm = useMemo(
    () => searchParams.get("searchTerm") ?? "",
    [searchParams]
  );

  const setSearchTerm = useCallback(
    (searchTerm: string) => {
      router.push(pathname + "?" + createQueryString("searchTerm", searchTerm));
    },
    [router, pathname, createQueryString]
  );

  if (isError) {
    console.error(error);
    return (
      <Alert variant={"destructive"}>
        <AlertTitle>Unable to Load Advocates</AlertTitle>
      </Alert>
    );
  }

  if (isPending) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Advocates</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advocates</CardTitle>
      </CardHeader>
      <CardContent>
        <AdvocatesTable
          advocates={data.body}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </CardContent>
    </Card>
  );
}
