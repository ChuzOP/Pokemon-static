import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.red600.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
        alt="PokeImage"
        width="70px"
        height="70px"
      />
      <NextLink href="/" passHref>
        <Link>
          <Text css={{ textShadow: "4px 2px 2px black", color: "yellow" }} h2>
            P
          </Text>
          <Text css={{ textShadow: "4px 2px 2px black", color: "white" }} h3>
            okemón
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text css={{ fontWeight: "bolder" }} h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
