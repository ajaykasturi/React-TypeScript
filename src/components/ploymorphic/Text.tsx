type TextOwnProps<E extends React.ElementType> = {
  size?: "md" | "sm" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
export const Text = <E extends React.ElementType>({
  size,
  color,
  children,
  as,
  ...rest
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`} {...rest}>
      {children}
    </Component>
  );
};
