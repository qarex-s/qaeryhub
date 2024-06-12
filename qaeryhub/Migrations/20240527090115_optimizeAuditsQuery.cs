using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class optimizeAuditsQuery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GeneralPerformanceId",
                table: "Audits",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Audits_GeneralPerformanceId",
                table: "Audits",
                column: "GeneralPerformanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audits_GeneralPerformances_GeneralPerformanceId",
                table: "Audits",
                column: "GeneralPerformanceId",
                principalTable: "GeneralPerformances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audits_GeneralPerformances_GeneralPerformanceId",
                table: "Audits");

            migrationBuilder.DropIndex(
                name: "IX_Audits_GeneralPerformanceId",
                table: "Audits");

            migrationBuilder.DropColumn(
                name: "GeneralPerformanceId",
                table: "Audits");
        }
    }
}
