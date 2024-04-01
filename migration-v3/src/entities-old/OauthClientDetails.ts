import { Column, Entity } from "typeorm";

@Entity("oauth_client_details", { schema: "Xtay" })
export class OauthClientDetails {
  @Column("varchar", { primary: true, name: "client_id", length: 32 })
  clientId: string;

  @Column("varchar", { name: "resource_ids", nullable: true, length: 256 })
  resourceIds: string | null;

  @Column("varchar", { name: "client_secret", nullable: true, length: 256 })
  clientSecret: string | null;

  @Column("varchar", { name: "scope", nullable: true, length: 256 })
  scope: string | null;

  @Column("varchar", {
    name: "authorized_grant_types",
    nullable: true,
    length: 256,
  })
  authorizedGrantTypes: string | null;

  @Column("varchar", {
    name: "web_server_redirect_uri",
    nullable: true,
    length: 256,
  })
  webServerRedirectUri: string | null;

  @Column("varchar", { name: "authorities", nullable: true, length: 256 })
  authorities: string | null;

  @Column("int", { name: "access_token_validity", nullable: true })
  accessTokenValidity: number | null;

  @Column("int", { name: "refresh_token_validity", nullable: true })
  refreshTokenValidity: number | null;

  @Column("varchar", {
    name: "additional_information",
    nullable: true,
    length: 4096,
  })
  additionalInformation: string | null;

  @Column("varchar", { name: "autoapprove", nullable: true, length: 256 })
  autoapprove: string | null;
}
