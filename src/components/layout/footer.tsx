export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-6 mt-auto border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SCTrailBlazer. All rights reserved.</p>
        <p>Follow SCTrailBlazer for more adventures!</p>
      </div>
    </footer>
  );
}
