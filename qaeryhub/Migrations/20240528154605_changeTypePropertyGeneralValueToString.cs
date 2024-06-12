using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class changeTypePropertyGeneralValueToString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audits_GeneralPerformances_GeneralPerformanceId",
                table: "Audits");

            migrationBuilder.DropForeignKey(
                name: "FK_Audits_PerformanceCategory_PerformanceCategoryId",
                table: "Audits");

            migrationBuilder.DropIndex(
                name: "IX_Audits_GeneralPerformanceId",
                table: "Audits");

            migrationBuilder.DropIndex(
                name: "IX_Audits_PerformanceCategoryId",
                table: "Audits");

            migrationBuilder.AlterColumn<string>(
                name: "GeneralValue",
                table: "GeneralPerformances",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "GeneralValue",
                table: "GeneralPerformances",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.CreateIndex(
                name: "IX_Audits_GeneralPerformanceId",
                table: "Audits",
                column: "GeneralPerformanceId");

            migrationBuilder.CreateIndex(
                name: "IX_Audits_PerformanceCategoryId",
                table: "Audits",
                column: "PerformanceCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audits_GeneralPerformances_GeneralPerformanceId",
                table: "Audits",
                column: "GeneralPerformanceId",
                principalTable: "GeneralPerformances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Audits_PerformanceCategory_PerformanceCategoryId",
                table: "Audits",
                column: "PerformanceCategoryId",
                principalTable: "PerformanceCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
