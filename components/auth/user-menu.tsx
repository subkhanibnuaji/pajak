"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserCircle2, LogOut, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/hooks/use-session";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((value) => value[0]?.toUpperCase() || "").join("");
}

export function UserMenu() {
  const router = useRouter();
  const { user, isLoading, logout } = useSession();

  async function handleLogout() {
    await logout();
    router.push("/login");
    router.refresh();
  }

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <UserCircle2 className="size-4" />
      </Button>
    );
  }

  if (!user) {
    return (
      <Button asChild size="sm" variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {initials(user.name)}
          </span>
          <span className="hidden max-w-[120px] truncate md:inline">
            {user.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/glosarium">
            <Bookmark className="size-4 mr-2" />
            Glosarium
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="size-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
