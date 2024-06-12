using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GeneralPerformances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SiteUrl = table.Column<string>(type: "text", nullable: false),
                    GeneralValue = table.Column<int>(type: "integer", nullable: false),
                    AverageValue = table.Column<int>(type: "integer", nullable: false),
                    TimeTesting = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralPerformances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PerformanceInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    NamePerformance = table.Column<string>(type: "text", nullable: false),
                    CurentValue = table.Column<int>(type: "integer", nullable: false),
                    GeneralPerformanceId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerformanceInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PerformanceInfos_GeneralPerformances_GeneralPerformanceId",
                        column: x => x.GeneralPerformanceId,
                        principalTable: "GeneralPerformances",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AuditsPerformances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TitleAudit = table.Column<string>(type: "text", nullable: false),
                    Weight = table.Column<int>(type: "integer", nullable: false),
                    PerformanceId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditsPerformances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AuditsPerformances_PerformanceInfos_PerformanceId",
                        column: x => x.PerformanceId,
                        principalTable: "PerformanceInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuditsPerformances_PerformanceId",
                table: "AuditsPerformances",
                column: "PerformanceId");

            migrationBuilder.CreateIndex(
                name: "IX_PerformanceInfos_GeneralPerformanceId",
                table: "PerformanceInfos",
                column: "GeneralPerformanceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuditsPerformances");

            migrationBuilder.DropTable(
                name: "PerformanceInfos");

            migrationBuilder.DropTable(
                name: "GeneralPerformances");
        }
    }
}
