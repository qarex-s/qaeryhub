using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class updatedMame : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceCategoryId",
                table: "AuditsPerformances");

            migrationBuilder.DropForeignKey(
                name: "FK_PerformanceInfos_GeneralPerformances_GeneralPerformanceId",
                table: "PerformanceInfos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PerformanceInfos",
                table: "PerformanceInfos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AuditsPerformances",
                table: "AuditsPerformances");

            migrationBuilder.RenameTable(
                name: "PerformanceInfos",
                newName: "PerformanceCategory");

            migrationBuilder.RenameTable(
                name: "AuditsPerformances",
                newName: "Audits");

            migrationBuilder.RenameIndex(
                name: "IX_PerformanceInfos_GeneralPerformanceId",
                table: "PerformanceCategory",
                newName: "IX_PerformanceCategory_GeneralPerformanceId");

            migrationBuilder.RenameIndex(
                name: "IX_AuditsPerformances_PerformanceCategoryId",
                table: "Audits",
                newName: "IX_Audits_PerformanceCategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PerformanceCategory",
                table: "PerformanceCategory",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Audits",
                table: "Audits",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Metrics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    PerformanceMetric = table.Column<int>(type: "integer", nullable: false),
                    AccessibilityMetric = table.Column<int>(type: "integer", nullable: false),
                    BestPracticesMetric = table.Column<int>(type: "integer", nullable: false),
                    SEOMetric = table.Column<int>(type: "integer", nullable: false),
                    CurentValue = table.Column<int>(type: "integer", nullable: false),
                    GeneralPerformanceId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Metrics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Metrics_GeneralPerformances_GeneralPerformanceId",
                        column: x => x.GeneralPerformanceId,
                        principalTable: "GeneralPerformances",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Metrics_GeneralPerformanceId",
                table: "Metrics",
                column: "GeneralPerformanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audits_PerformanceCategory_PerformanceCategoryId",
                table: "Audits",
                column: "PerformanceCategoryId",
                principalTable: "PerformanceCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PerformanceCategory_GeneralPerformances_GeneralPerformanceId",
                table: "PerformanceCategory",
                column: "GeneralPerformanceId",
                principalTable: "GeneralPerformances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audits_PerformanceCategory_PerformanceCategoryId",
                table: "Audits");

            migrationBuilder.DropForeignKey(
                name: "FK_PerformanceCategory_GeneralPerformances_GeneralPerformanceId",
                table: "PerformanceCategory");

            migrationBuilder.DropTable(
                name: "Metrics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PerformanceCategory",
                table: "PerformanceCategory");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Audits",
                table: "Audits");

            migrationBuilder.RenameTable(
                name: "PerformanceCategory",
                newName: "PerformanceInfos");

            migrationBuilder.RenameTable(
                name: "Audits",
                newName: "AuditsPerformances");

            migrationBuilder.RenameIndex(
                name: "IX_PerformanceCategory_GeneralPerformanceId",
                table: "PerformanceInfos",
                newName: "IX_PerformanceInfos_GeneralPerformanceId");

            migrationBuilder.RenameIndex(
                name: "IX_Audits_PerformanceCategoryId",
                table: "AuditsPerformances",
                newName: "IX_AuditsPerformances_PerformanceCategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PerformanceInfos",
                table: "PerformanceInfos",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AuditsPerformances",
                table: "AuditsPerformances",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AuditsPerformances_PerformanceInfos_PerformanceCategoryId",
                table: "AuditsPerformances",
                column: "PerformanceCategoryId",
                principalTable: "PerformanceInfos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PerformanceInfos_GeneralPerformances_GeneralPerformanceId",
                table: "PerformanceInfos",
                column: "GeneralPerformanceId",
                principalTable: "GeneralPerformances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
