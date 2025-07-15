import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode
}) {

return (
     <>     <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton/>
          
            </SignedOut>
            <SignedIn>
              <UserButton  />
            </SignedIn>
          </header>
          {children}
         </>
  
            
            )


}